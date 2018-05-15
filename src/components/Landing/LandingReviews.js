import React from 'react'
import LandingReview from './LandingReview'
import styles from './LandingReviews.module.sass'
import SvgIcon from '../UI/SvgIcon'

const LandingReviews = ({ title, items }) => {
    return (
        <section className={styles.container}>
            <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <div data-uk-slider className={styles.carousel}>
                <div className="uk-slider-container">
                    <ul className="uk-slider-items uk-child-width-1-1 uk-grid">
                        {items.edges.map((item, index) => <LandingReview {...item.node} key={index} />)}
                    </ul>
                </div>
                <button className={styles.prev} data-uk-slider-item="previous">
                    <SvgIcon name="chevron-left" />
                </button>
                <button className={styles.next} data-uk-slider-item="next">
                    <SvgIcon name="chevron-right" />
                </button>
            </div>
            <div className={styles.all}>
                <a href="#" className="button-secondary">Смотреть все отзывы</a>
            </div>
        </section>
    )
}

export default LandingReviews
