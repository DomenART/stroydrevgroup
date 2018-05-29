import React, { Fragment } from 'react'
import TextWithVideo from './TextWithVideo'
import FlexibleVideo from './FlexibleVideo'
import FlexibleImage from './FlexibleImage'
import FlexibleText from './FlexibleText'

const Flexible = ({ rows }) =>
    <section className="uk-grid" data-uk-grid>
        {rows && rows.map((row, index) => {
            const classes = []
            if (row.columns) {
                row.columns.map(column => {
                    let str = column.width
                    if (column.responsive)
                        str = `${str}@${column.responsive}`
                    classes.push(str)
                })
            } else {
                classes.push('uk-width-1-1')
            }

            return (
                <div className={classes.join(' ')} key={index}>
                    {{
                        WordPressAcf_text_with_video: (
                            <TextWithVideo {...row} />
                        ),
                        WordPressAcf_text: (
                            <FlexibleText {...row} />
                        ),
                        WordPressAcf_video: (
                            <FlexibleVideo {...row} />
                        ),
                        WordPressAcf_image: (
                            <FlexibleImage {...row} />
                        ),
                        WordPressAcf_spacer: (
                            <Fragment />
                        ),
                    }[row.__typename]}
                </div>
            )
        })}
    </section>

export default Flexible

export const query = graphql`
fragment FlexibleFields on Node {
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
`