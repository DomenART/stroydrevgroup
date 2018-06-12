import React from 'react'
import PostRelatedItem from './PostRelatedItem'
import styles from './PostRelated.module.sass'

const PostRelated = ({ items }) =>
    <div className={styles.container}>
        <div className={styles.title}>Читайте также:</div>
        <div className="uk-grid">
            {items.map(row => (
                <PostRelatedItem
                    {...row}
                    key={row.wordpress_id}
                />
            ))}
        </div>
    </div>

export default PostRelated