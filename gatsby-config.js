require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Стройдрев`,
        siteUrl: `https://stroydrevgroup.ru`,
    },
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: process.env.WP_BASE_URL,
                protocol: process.env.WP_PROTOCOL,
                useACF: true,
                verboseOutput: false,
                perPage: 100,
                searchAndReplaceContentUrls: {
                    sourceUrl: process.env.WP_SOURCE_URL,
                    replacementUrl: process.env.WP_REPLACEMENT_URL
                },
                concurrentRequests: 10,

                hostingWPCOM: false,
                auth: {
                    htaccess_user: process.env.WP_USER,
                    htaccess_pass: process.env.WP_PASS,
                    htaccess_sendImmediately: false,
                }
            },
        },
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: '#ffd251',
                showSpinner: false
            }
        },
        'gatsby-plugin-sitemap',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-image',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: process.env.WP_REPLACEMENT_URL
            }
        },
        // 'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
                postCssPlugins: [
                    require('postcss-icss-keyframes')(),
                    require('autoprefixer')({
                        grid: false
                    }),
                    require('cssnano')({
                        safe: true
                    })
                ],
                precision: 8,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `components`,
                path: `${__dirname}/src/components/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `utils`,
                path: `${__dirname}/src/utils/`,
            },
        },
    ],
};
