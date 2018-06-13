import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config.json'
import Neighbors from '../UI/Neighbors'
import Print from '../UI/Print'
import styles from './PostHeadline.module.sass'
import SvgIcon from '../UI/SvgIcon';

class PostHeadline extends Component {
    constructor(props) {
        super(props)

        // this.addLike = this.addLike.bind(this)
        this.addFav = this.addFav.bind(this)
    }

    componentDidMount() {
        // axios.post(config.AJAX_URL, {
        //     action: 'add_view',
        //     type: 'post',
        //     id: this.props.wordpress_id
        // })
    }

    // addLike() {
    //     axios.post(config.AJAX_URL, {
    //         action: 'add_like',
    //         type: 'post',
    //         id: this.props.wordpress_id
    //     })
    //     .then(response => {
    //         if (response.data === false) {
    //             UIkit.notification({
    //                 message: 'Вы уже голосовали за эту статью',
    //                 status: 'danger'
    //             })
    //         }
    //     })
    // }

    addFav() {
        const UA = navigator.userAgent.toLowerCase()
        // const isFF = UA.indexOf('firefox') != -1
        const isMac = UA.indexOf('mac') != -1
        // const isWebkit = UA.indexOf('webkit') != -1
        // const isIE = UA.indexOf('.net') != -1
        UIkit.notification({
            message: 'Нажмите "' + (isMac ? 'Command/Cmd' : 'Ctrl') + ' + D" для добавления страницы в закладки',
            status: 'success'
        })
    }

    render() {
        const { tags, date, likes, views } = this.props

        return (
            <div className={styles.headline}>
                <div className={styles.headlineLeft}>
                    {tags && (
                        <div className={styles.tags}>
                            <SvgIcon name="list" />
                            {tags.map(tag => (
                                <span
                                    key={tag.id}
                                    dangerouslySetInnerHTML={{__html:tag.name}}
                                />
                            ))}
                        </div>
                    )}

                    <div className={styles.date}>
                        <SvgIcon name="schedule" /> {date}
                    </div>

                    <button
                        className={styles.favorite}
                        onClick={this.addFav}
                    >
                        <SvgIcon name="star" />
                        <span>Добавить в избранное</span>
                    </button>

                    {/* <div className={styles.regard}>
                        <button
                            className={styles.likes}
                            onClick={this.addLike}
                        >
                            <SvgIcon name="like" /> {likes}
                        </button>
                        <span className={styles.views}>
                            <SvgIcon name="eye" /> {views}
                        </span>
                    </div> */}
                </div>

                <Print />

                <div className={styles.neighbors}>
                    <Neighbors {...this.props.neighbors} />
                </div>
            </div>
        )
    }
}

export default PostHeadline