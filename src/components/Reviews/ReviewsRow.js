import React, { Component } from 'react'
import classNames from 'classnames'
import socialLinkIcon from '../../utils/socialLinkIcon'
import styles from './ReviewsRow.module.sass'
import Link from '../UI/Link'
import SvgIcon from '../UI/SvgIcon'

class ReviewsRow extends Component {
    render() {
        const { title, content, excerpt, id } = this.props
        const { name, links, date, media } = this.props.acf

        return (
            <div className={styles.box}>
                <div className={styles.headline}>
                    <div className={styles.author}>
                        <SvgIcon name="user" />
                        <span>{name}</span>
                    </div>
                    <div className={styles.links}>
                        {links && links.map(({ link }, index) => {
                            const icon = socialLinkIcon(link)
                            return (
                                <Link
                                    to={link}
                                    key={index}
                                    className={classNames(styles.link, styles[`link_${icon}`])}
                                    target="_blank"
                                >
                                    {icon ? <SvgIcon name={icon} /> : link}
                                </Link>
                            )
                        })}
                    </div>
                    <div className={styles.date}>
                        <SvgIcon name="schedule" />
                        {date}
                    </div>
                </div>
                <div
                    className={styles.title}
                    dangerouslySetInnerHTML={{__html:title.rendered}}
                />
                {media && (
                    <figure className={styles.media}>
                        {media.type == 'image' ? (
                            <img
                                className={styles.image}
                                src={media.url}
                            />
                        ) : (
                            <video
                                className={styles.video}
                                controls
                            >
                                <source
                                    src={media.url}
                                    type={media.mime_type}
                                />
                            </video>
                        )}
                    </figure>
                )}
                <div className={styles.info}>
                    <SvgIcon name="quote" className={styles.quote}/>
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html:excerpt.rendered}}
                    />
                    {content.rendered && (
                        <Link
                            to={`#${id}`}
                            className={classNames(styles.more, 'button-jitney')}
                        >
                            <span>читать </span>полностью
                            <SvgIcon name="arrow-right" />
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default ReviewsRow