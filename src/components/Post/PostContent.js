import React from 'react'
import styles from './PostContent.module.sass'
import YaShare from '../UI/YaShare'
import Neighbors from '../UI/Neighbors'

const PostContent = ({ excerpt, content, neighbors }) =>
    <div className={styles.container}>
        {excerpt && (
            <div
                className={styles.excerpt}
                dangerouslySetInnerHTML={{__html:excerpt}}
            />
        )}
        <div className={styles.headShare}>
            <YaShare counter={true} />
        </div>
        <div
            className={styles.content}
            dangerouslySetInnerHTML={{__html:content}}
        />
        <div className={styles.footer}>
            <div className={styles.footerShare}>
                Поделиться: <YaShare size="large" />
            </div>
            <div className={styles.neighbors}>
                <Neighbors {...neighbors} />
            </div>
        </div>
    </div>

export default PostContent