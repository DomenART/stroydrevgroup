import React from 'react'
import styles from './PostIntro.module.sass'
import YaShare from '../UI/YaShare'

const PostIntro = ({ text }) =>
    <div className={styles.container}>
        <div
            className={styles.text}
            dangerouslySetInnerHTML={{__html:text}}
        />
        <YaShare />
    </div>

export default PostIntro