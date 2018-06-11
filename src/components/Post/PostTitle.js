import React from 'react'
import styles from './PostTitle.module.sass'

const PostTitle = ({ html }) =>
    <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: html }}
    />

export default PostTitle