import React from 'react'
import styles from './PostMain.module.sass'

const PostMain = ({ children }) =>
    <div className={styles.container}>
        {children}
    </div>

export default PostMain