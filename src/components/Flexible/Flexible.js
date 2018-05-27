import React from 'react'
import TextWithVideo from './TextWithVideo'

const getContent = (row) => {
    switch (row.__typename) {
        case 'WordPressAcf_text_with_video':
            return <TextWithVideo {...row} />
        // case 'WordPressAcf_text':
        //     return <Text {...row} />
        // case 'WordPressAcf_video':
        //     return <Text {...row} />
        // case 'WordPressAcf_image':
        //     return <Text {...row} />
        // case 'WordPressAcf_spacer':
        //     return <Text {...row} />
    }
}

const Flexible = ({ rows }) =>
    <section className="uk-grid" data-uk-grid>
        {rows.map((row, index) => {
            const classes = []
            if (row.columns) {
                row.columns.map(column => {
                    column.push(`${column.width}@${column.responsive}`)
                })
            } else {
                classes.push('uk-width-1-1')
            }

            return (
                <div className={classes.join(' ')} key={index}>
                    {getContent(row)}
                </div>
            )
        })}
    </section>

export default Flexible

export const query = graphql`
fragment FlexibleFields on wordpress__PAGE {
    acf {
        content_page {
            __typename
            ... on WordPressAcf_text_with_video {
                text
                video {
                    title
                    mime_type
                    localFile {
                        publicURL
                    }
                }
            }
            ... on WordPressAcf_text {
                text
                columns {
                    width
                    responsive
                }
            }
            ... on WordPressAcf_video {
                title
                description
                video {
                    title
                    mime_type
                    localFile {
                        publicURL
                    }
                }
                columns {
                    width
                    responsive
                }
            }
            ... on WordPressAcf_image {
                title
                description
                image {
                    title
                    mime_type
                    localFile {
                        publicURL
                    }
                }
                columns {
                    width
                    responsive
                }
            }
            ... on WordPressAcf_spacer {
                columns {
                    width
                    responsive
                }
            }
        }
    }
}
`