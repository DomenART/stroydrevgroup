const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const urlParse = require('url-parse')

exports.modifyBabelrc = ({ babelrc }) =>
    Object.assign(babelrc, {
        plugins: babelrc.plugins.concat(['transform-decorators-legacy'])
    })

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        let pages = []
        let home = {}
        const createBreadcrumbs = (current) => {
            const breadcrumbs = [{
                id: home.id,
                uri: urlParse(home.link).pathname,
                title: home.title,
                current: false
            }]
            const addParent = wordpress_id => {
                const item = pages.find(child => child.node.wordpress_id == wordpress_id)
                if (item.node.parent_element) {
                    addParent(item.node.parent_element.wordpress_id)
                }
                breadcrumbs.push({
                    id: item.node.id,
                    uri: urlParse(item.node.link).pathname,
                    title: item.node.title,
                    current: false
                })
            }
            if (current.parent_element) {
                addParent(current.parent_element.wordpress_id)
            } else if (current.acf && current.acf.linked_page) {
                addParent(current.acf.linked_page.wordpress_id)
            }
            breadcrumbs.push({
                id: current.id,
                uri: urlParse(current.link).pathname,
                title: current.title,
                current: true
            })

            return breadcrumbs
        }
        const pdoNeighbors = (current, rows) => {
            let previous = {}
            let next = {}

            switch (current) {
                case 0:
                    previous = rows[rows.length-1].node
                    next = rows[1].node
                    break;
                case (rows.length-1):
                    previous = rows[rows.length-2].node
                    next = rows[0].node
                    break;
                default:
                    previous = rows[current-1].node
                    next = rows[current+1].node
                    break;
            }

            return {
                previous: {
                    path: urlParse(previous.link).pathname,
                    title: previous.title
                },
                next: {
                    path: urlParse(next.link).pathname,
                    title: next.title
                }
            }
        }

        graphql(`{
            pages: allWordpressPage {
                edges {
                    node {
                        id
                        wordpress_id
                        parent_element {
                          wordpress_id
                        }
                        title
                        status
                        template
                        link
                    }
                }
            }
            home: wordpressPage(slug: { eq: "index" }) {
                id
                wordpress_id
                link
                title
            }
        }`)
        .then(result => {
            if (result.errors) {
                console.log(result.errors)
                reject(result.errors)
            }

            pages = result.data.pages.edges
            home = result.data.home
        })

        // ==== PAGES (WORDPRESS NATIVE AND ACF) ====
        .then(() => {
            const defaultTemplate = 'page'
            _.each(pages, edge => {
                const template = edge.node.template ?
                    path.parse(edge.node.template).name :
                    defaultTemplate

                createPage({
                    path: urlParse(edge.node.link).pathname,
                    component: slash(path.resolve(`./src/templates/${template}.js`)),
                    context: {
                        id: edge.node.id,
                        breadcrumbs: createBreadcrumbs(edge.node)
                    }
                })
            })
        })
        // ==== END PAGES ====

        // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
        .then(() => {
            graphql(`{
                allWordpressPost {
                    edges {
                        node {
                            id
                            link
                            status
                            template
                            format
                        }
                    }
                }
            }`)
            .then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                const postTemplate = path.resolve("./src/templates/post.js")
                _.each(result.data.allWordpressPost.edges, edge => {
                    createPage({
                        path: urlParse(edge.node.link).pathname,
                        component: slash(postTemplate),
                        context: {
                            id: edge.node.id
                        }
                    })
                })
                resolve()
            })
        })
        // ==== END POSTS ====

        // ==== PROJECTS (WORDPRESS NATIVE AND ACF) ====
        .then(() => {
            graphql(`{
                allWordpressWpProject {
                    edges {
                        node {
                            id
                            wordpress_id
                            link
                            title
                            status
                            link
                            acf {
                                linked_page {
                                    wordpress_id
                                }
                            }
                        }
                    }
                }
            }`)
            .then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                const postTemplate = path.resolve("./src/templates/project.js")
                _.each(result.data.allWordpressWpProject.edges, (edge, index) => {
                    createPage({
                        path: urlParse(edge.node.link).pathname,
                        component: slash(postTemplate),
                        context: {
                            id: edge.node.id,
                            breadcrumbs: createBreadcrumbs(edge.node),
                            neighbors: pdoNeighbors(index, result.data.allWordpressWpProject.edges)
                        }
                    })
                })
                resolve()
            })
        })
        // ==== PROJECTS POSTS ====
    })
}
