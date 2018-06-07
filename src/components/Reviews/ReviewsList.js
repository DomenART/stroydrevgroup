import React, { Component } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import queryString from 'jquery-param'
import Link from '../UI/Link'
import ReviewsRow from './ReviewsRow'
import styles from './ReviewsList.module.sass'
import config from '../../config.json'

class ReviewsList extends Component {
    constructor(props) {
        super(props)
        this.grid = React.createRef()
        this.state = {
            loading: false,
            total: 0,
            pages: 0,
            rows: [],
            query: {
                page: 1,
                per_page: 10,
                orderby: 'date',
                order: 'asc'
            }
        }
        this.addPage = this.addPage.bind(this)
    }

    componentDidMount() {
        this.loadReviews()
    }

    addPage() {
        this.setState({
            query: {
                ...this.state.query,
                page: this.state.query.page + 1
            }
        }, this.loadReviews)
    }

    loadReviews() {
        this.setState({
            loading: true
        }, () => {
            const query = queryString(this.state.query)

            axios.get(`${config.API_URL}wp/v2/reviews?${query}`)
            .then(response => {
                this.setState({
                    loading: false,
                    total: response.headers['x-wp-total'],
                    pages: response.headers['x-wp-totalpages'],
                    rows: this.state.rows.concat(response.data)
                }, this.updateMasonry)
            })
        })
    }

    updateMasonry() {
        if (!this.gridComponent) {
            this.gridComponent = UIkit.grid(this.grid.current, {
                masonry: true
            })
        } else {
            this.gridComponent.$emit('update')
        }
    }

    render() {
        const { loading, rows, pages, query } = this.state

        return (
            <div className={styles.container}>
                {loading && (
                    <div className={styles.loader}>
                        <div data-uk-spinner="ratio: 3" />
                    </div>
                )}

                <div className="uk-grid uk-grid-small" ref={this.grid}>
                    {rows.map(row => (
                        <div className="uk-width-1-2@m" key={row.id}>
                            <ReviewsRow {...row} />
                        </div>
                    ))}
                    <div className="uk-width-1-2@m">
                        {pages > query.page && (
                            <div className={styles.moreWrap} key={'more'}>
                                <button
                                    className={`${styles.moreBtn} button-secondary`}
                                    dangerouslySetInnerHTML={{
                                        __html:`Показать еще ${query.per_page} отзывов`
                                    }}
                                    onClick={this.addPage}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewsList