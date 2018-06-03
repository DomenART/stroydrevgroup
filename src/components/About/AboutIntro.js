import React from 'react'
import styles from './AboutIntro.module.sass'

const AboutIntro = ({ title, text, media = {localFile:{}} }) =>
    <div className={styles.box}>
        <figure className={styles.media}>
            {media.media_type == 'image' ? (
                <img
                    className={styles.image}
                    src={media.localFile.publicURL}
                />
            ) : (
                <video
                    className={styles.video}
                    controls
                >
                    <source
                        src={media.localFile.publicURL}
                        type={media.mime_type}
                    />
                </video>
            )}
            <figcaption className={styles.figcaption}>
                <h5
                    className={styles.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <h6
                    className={styles.text}
                    dangerouslySetInnerHTML={{__html:text}}
                />
            </figcaption>
        </figure>
    </div>

export default AboutIntro