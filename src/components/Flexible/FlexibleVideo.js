import React from 'react'
import styles from './FlexibleVideo.module.sass'

export default ({ video, title, description }) =>
    <figure className={styles.figure}>
        <video className={styles.video} controls>
            <source src={video.localFile.publicURL} type={video.mime_type} />
        </video>
        <figcaption className={styles.figcaption}>
            <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </figcaption>
    </figure>