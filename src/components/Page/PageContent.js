import React from 'react'
import Flexible from '../Flexible/Flexible'
import styles from './PageContent.module.sass'

const PageContent = ({ content, flexible }) =>
    <div className={styles.container}>
        {content && (
            <div
                dangerouslySetInnerHTML={{ __html: content }}
            />
        )}
        {flexible && (
            <Flexible rows={flexible} />
        )}
    </div>

export default PageContent