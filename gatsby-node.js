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

        // ==== PAGES (WORDPRESS NATIVE) ====
        graphql(`{
            allWordpressPage {
                edges {
                    node {
                        id
                        status
                        template
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

            // Create Page pages.
            const defaultTemplate = 'page'
            _.each(result.data.allWordpressPage.edges, edge => {
                let template = edge.node.template ?
                    path.parse(edge.node.template).name :
                    defaultTemplate
                createPage({
                    path: urlParse(edge.node.link).pathname,
                    component: slash(path.resolve(`./src/templates/${template}.js`)),
                    context: {
                        id: edge.node.id
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
