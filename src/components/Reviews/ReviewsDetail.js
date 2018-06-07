import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import socialLinkIcon from '../../utils/socialLinkIcon'
import Link from '../UI/Link'
import SvgIcon from '../UI/SvgIcon'
import styles from './ReviewsDetail.module.sass'
import config from '../../config.json'
import Share from '../UI/Share'

const Body = ({ title, content, id, previous, next, acf }) => {
    const { name, links, date, media } = acf
    const cut = content && content.rendered.split('<!--more-->')

    const nav = (
        <Fragment>
            {Boolean(previous) && (
                <Link to={`/about/reviews#${previous}`} className={styles.previous}>
                    <SvgIcon name="chevron-left" />
                </Link>
            )}
            {Boolean(next) && (
                <Link to={`/about/reviews#${next}`} className={styles.next}>
                    <SvgIcon name="chevron-right" />
                </Link>
            )}
        </Fragment>
    )

    return (
        <Fragment>
            <div className="uk-grid uk-grid-collapse">
                {media && (
                    <div className={classNames('uk-width-1-2@m uk-width-2-3@l', styles.mediaWrap)}>
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
                        {nav}
                    </div>
                )}
                <div className={classNames('uk-width-expand', styles.info)}>
                    <div className={styles.share}>
                        <Share size={24} />
                    </div>
                    <div
                        className={styles.title}
                        dangerouslySetInnerHTML={{__html:title.rendered}}
                    />
                    <div className={styles.author}>
                        <div className={styles.name}>
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
                    </div>
                    <div className={styles.date}>
                        <SvgIcon name="schedule" />
                        {date}
                    </div>
                    {cut[1] && (
                        <div className={styles.intro}>
                            <SvgIcon name="quote" className={styles.quote}/>
                            <div dangerouslySetInnerHTML={{ __html: cut[0] }} />
                        </div>
                    )}
                    {!media && nav}
                </div>
            </div>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                    __html: cut[1] || cut[0]
                }}
            />
        </Fragment>
    )
}


class ReviewsDetail extends Component {
    constructor(props) {
        super(props)
        this.modalRef = React.createRef()
        this.state = {
            loaded: false,
            loading: false,
            data: {}
        }
    }

    componentDidMount() {
        this.modal = UIkit.modal(this.modalRef.current, {
            selClose: `.${styles.close}`,
            container: false
        })
        // UIkit.util.on(this.modalRef.current, 'hidden', () => {
        //     window.location.hash = ''
        // })
        this.getData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id != this.props.id) {
            this.getData()
        }
    }

    componentWillUnmount() {
        this.hideModal()
        document.querySelector('html').classList.remove(this.modal.clsPage)
    }

    getData() {
        this.setState({
            loading: true
        }, () => {
            axios.get(`${config.API_URL}wp/v2/reviews/${this.props.id}`)
            .then(response => {
                this.setState({
                    loaded: true,
                    loading: false,
                    data: response.data
                }, this.showModal)
            })
        })
    }

    showModal() {
        this.modal.show()
    }

    hideModal() {
        this.modal.hide()
    }

    render() {
        return (
            <div className={styles.modal} ref={this.modalRef}>
                <div
                    className={classNames('uk-modal-dialog', styles.dialog)}
                >
                    <button className={styles.close} />

                    {this.state.loaded && <Body {...this.state.data} />}

                    {(this.state.loading || !this.state.loaded) && (
                        <div className={styles.loader}>
                            <div data-uk-spinner="ratio: 3" />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ReviewsDetail