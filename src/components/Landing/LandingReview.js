import React from 'react'
import SvgIcon from '../UI/SvgIcon'
import truncate from 'lodash/truncate'
import styles from './LandingReview.module.sass'

const LandingReview = ({ slug, title, content, acf }) =>
    <li className={styles.item}>
        <figure className={styles.media}>
            {acf.media.media_type == 'image' ? (
                <img src={acf.media.localFile.publicURL} data-uk-cover />
            ) : (
                <video controls data-uk-cover="autoplay: false">
                    <source
                        src={acf.media.localFile.publicURL}
                        type={acf.media.mime_type}
                    />
                </video>
            )}
        </figure>
        <div className={styles.info}>
            <SvgIcon name="quote" className={styles.quote}/>
            <div
                className={styles.name}
                dangerouslySetInnerHTML={{ __html: acf.name }}
            />
            <div
                className={styles.address}
                dangerouslySetInnerHTML={{ __html: `${acf.address}, ${acf.date}` }}
            />
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: truncate(content, {
                    length: 200
                }) }}
            />
            <a href={slug} className={`button-jitney ${styles.more}`}>
                <span>читать </span>полностью
                <SvgIcon name="arrow-right" />
            </a>
        </div>
    </li>

export default LandingReview
