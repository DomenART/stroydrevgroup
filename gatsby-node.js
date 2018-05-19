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
        // if (template == 'catalog') {
        //     const options = {
        //         material: [],
        //         type: [],
        //         floors: []
        //     }
        //     projects.map(row => {
        //         Object.keys(options).map(key => {
        //             if (row.node.acf[key] && options[key].indexOf(row.node.acf[key]) === -1) {
        //                 options[key].push(row.node.acf[key])
        //             }
        //         })
        //     })
        //     context.options = options
        // }

        // ==== PAGES (WORDPRESS NATIVE) ====
        graphql(`{
            allWordpressPage {
                edges {
                    node {
                        id
                        parent_element {
                          id
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
                link
                title
            }
        }`)
        .then(result => {
            if (result.errors) {
                console.log(result.errors)
                reject(result.errors)
            }

            // Create Page pages.
            const edges = result.data.allWordpressPage.edges
            const defaultTemplate = 'page'
            _.each(edges, edge => {
                const template = edge.node.template ?
                    path.parse(edge.node.template).name :
                    defaultTemplate
                const pathname = urlParse(edge.node.link).pathname
                const breadcrumbs = [{
                    id: result.data.home.id,
                    uri: urlParse(result.data.home.link).pathname,
                    title: result.data.home.title,
                    current: false
                }]
                const addParent = id => {
                    const item = edges.find(child => child.node.id == id)
                    if (item.node.parent_element) {
                        addParent(item.node.parent_element.id)
                    }
                    breadcrumbs.push({
                        id: id,
                        uri: urlParse(item.node.link).pathname,
                        title: item.node.title,
                        current: false
                    })
                }
                if (edge.node.parent_element) {
                    addParent(edge.node.parent_element.id)
                }
                breadcrumbs.push({
                    id: edge.node.id,
                    uri: pathname,
                    title: edge.node.title,
                    current: true
                })

                createPage({
                    path: urlParse(edge.node.link).pathname,
                    component: slash(path.resolve(`./src/templates/${template}.js`)),
                    context: {
                        id: edge.node.id,
                        breadcrumbs: breadcrumbs
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
                            link
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
                _.each(result.data.allWordpressWpProject.edges, edge => {
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
        // ==== PROJECTS POSTS ====
    })
}
