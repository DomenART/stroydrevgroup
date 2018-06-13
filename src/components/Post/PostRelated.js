import React from 'react'
import PostRelatedItem from './PostRelatedItem'
import styles from './PostRelated.module.sass'

const PostRelated = ({ items }) =>
    <div className={styles.container}>
        <div className={styles.title}>Читайте также:</div>
        <div className="uk-grid" data-uk-grid>
            {items.map(row => (
                <div
                    className={'uk-width-1-3@s'}
                    key={row.wordpress_id}
                >
                    <PostRelatedItem {...row} />
                </div>
            ))}
        </div>
    </div>

export default PostRelated