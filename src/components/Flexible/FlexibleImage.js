import React from 'react'
import styles from './FlexibleImage.module.sass'

export default ({ image, title, description }) =>
    <figure className={styles.figure}>
        <img className={styles.image} src={image.localFile.publicURL} />
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