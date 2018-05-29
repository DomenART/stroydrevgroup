import React, { Fragment, Component } from 'react'
import styles from './ProjectGallery.module.sass'
import SvgIcon from '../UI/SvgIcon'

class ProjectGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1
        }
        this.slideshow = React.createRef()
        this.slider = React.createRef()
        this.setSlideshow = this.setSlideshow.bind(this)
    }

    componentDidMount() {
        this.slideshow.current.addEventListener('itemshow', (e) => {
            this.setState({
                active: e.detail[0].index
            }, () => {
                UIkit.slider(this.slider.current).show(e.detail[0].index)
            })
        })
    }

    setSlideshow(index) {
        this.setState({
            active: index
        }, () => {
            UIkit.slideshow(this.slideshow.current).show(index)
        })
    }

    render() {
        const { rows } = this.props

        return (
            <Fragment>
                <div
                    ref={this.slideshow}
                    className={styles.slideshow}
                    data-uk-slideshow="ratio: 4:3; animation: push"
                >
                    <ul className="uk-slideshow-items">
                        {rows.map(({ id, title, localFile }) => {
                            const srcset = []
                            Object.keys(localFile.childImageSharp).map(key => {
                                const row = localFile.childImageSharp[key]
                                srcset.push(`${row.src} ${row.width}w`)
                            })
                            return (
                                <li key={id}>
                                    <img
                                        src={localFile.publicURL}
                                        srcSet={srcset.join(', ')}
                                        alt={title}
                                        data-uk-cover
                                        />
                                </li>
                            )
                        })}
                    </ul>
                    <button className={styles.prev} data-uk-slideshow-item="previous">
                        <SvgIcon name="chevron-left" />
                    </button>
                    <button className={styles.next} data-uk-slideshow-item="next">
                        <SvgIcon name="chevron-right" />
                    </button>
                </div>

                <div
                    ref={this.slider}
                    className={styles.slider}
                    data-uk-slider
                >
                    <div className="uk-slider-container">
                        <ul className="uk-slider-items uk-grid uk-grid-small uk-child-width-1-3">
                            {rows.map(({ id, title, localFile }, index) => {
                                const classes = [styles.sliderItem]
                                if (this.state.active == index) {
                                    classes.push(styles.sliderItem_active)
                                }
                                return  (
                                    <li key={id}>
                                        <img
                                            className={classes.join(' ')}
                                            src={localFile.childImageSharp.thumb.src}
                                            alt={title}
                                            onClick={() => this.setSlideshow(index)}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {rows.length > 3 && (
                        <Fragment>
                            <button className={styles.prev} data-uk-slider-item="previous">
                                <SvgIcon name="chevron-left" />
                            </button>
                            <button className={styles.next} data-uk-slider-item="next">
                                <SvgIcon name="chevron-right" />
                            </button>
                        </Fragment>
                    )}
                </div>
            </Fragment>
        )
    }
}

export default ProjectGallery