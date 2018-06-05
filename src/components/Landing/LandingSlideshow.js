import React, { Component } from 'react'
import { connect } from 'react-redux'
import SvgIcon from '../UI/SvgIcon'
import styles from './LandingSlideshow.module.sass'

const Slide = ({ image, title, desc, price, ...props }) =>
    <li {...props}>
        <div
            className={styles.image}
            >
            <img
                className="uk-cover"
                src={image.localFile.childImageSharp.sizes.originalImg}
                srcSet={image.localFile.childImageSharp.sizes.srcSet}
                alt={image.alt_text}
                data-uk-cover
            />
        </div>
        <div className={styles.info}>
            <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
            <div className={styles.price}>
                {new Intl.NumberFormat('ru-RU').format(price)}
                <SvgIcon name="ruble" />
            </div>
            <div className={styles.desc} dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
    </li>

@connect(
    state => ({
        resolution: state.resolution,
        phone: state.app.options.phone
    })
)
class LandingSlideshow extends Component {
    componentDidMount() {
        UIkit.slideshow(this.refs.slideshow, {
            animation: 'push',
            ratio: false
        })
    }

    render() {
        const { items } = this.props
        const { isExtraSmallMax } = this.props.resolution

        return (
            <div className={styles.slideshow} ref="slideshow">
                <ul className={`${styles.items} uk-slideshow-items`}>
                    {items.map((row, index) => (
                        <Slide
                            {...row}
                            key={index}
                            className={`
                                ${styles.slide}
                                ${index === 0 ? 'uk-active' : ''}
                            `}
                        />
                    ))}
                </ul>
                <button
                    className={styles.prev}
                    data-uk-slideshow-item="previous"
                >
                    <SvgIcon name="chevron-left" />
                </button>
                <button
                    className={styles.next}
                    data-uk-slideshow-item="next"
                >
                    <SvgIcon name="chevron-right" />
                </button>
                <ul className={`${styles.dots} uk-slideshow-nav`}></ul>
                {isExtraSmallMax && <div className={styles.phone}>{this.props.phone}</div>}
            </div>
        )
    }
}

export default LandingSlideshow
