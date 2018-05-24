import React, { Component } from 'react'
import Link from 'gatsby-link'
import SvgIcon from '../UI/SvgIcon'
import ProjectsTile from '../Projects/ProjectsTile'
import isEqual from 'lodash/isEqual'
import styles from './LandingProjects.module.sass'
import config from '../../config.json'

const Checkbox = ({ active, name, value, title, className, onChange }) => {
    let classes = [styles.input]
    className && classes.push(className)
    return (
        <label className={classes.join(' ')}>
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={active}
                onChange={onChange}
            />
            <div>
                <span><SvgIcon name="check" /></span>
                <div dangerouslySetInnerHTML={{__html: title}} />
            </div>
        </label>
    )
}

class LandingProjects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            filters: [{
                active: false,
                name: "area",
                value: "100",
                compare: "<",
                type: "numeric",
                title: "до 100 м<sup>2</sup>"
            }, {
                active: false,
                name: "area",
                value: "100",
                compare: ">",
                type: "numeric",
                className: "uk-hidden@l",
                title: "больше 100 м<sup>2</sup>"
            }, {
                active: false,
                name: "area",
                value: "100,180",
                compare: "BETWEEN",
                type: "numeric",
                className: "uk-visible@l",
                title: "100 - 180 м<sup>2</sup>"
            }, {
                active: false,
                name: "area",
                value: "180,250",
                compare: "BETWEEN",
                type: "numeric",
                className: "uk-visible@l",
                title: "180 - 250 м<sup>2</sup>"
            }, {
                active: false,
                name: "area",
                value: "250",
                compare: ">",
                type: "numeric",
                className: "uk-visible@l",
                title: "более 250 м<sup>2</sup>"
            }]
        }
        this.toggleCheck = this.toggleCheck.bind(this)
        this.resetFilters = this.resetFilters.bind(this)
    }

    componentDidMount() {
        this.loadProjects()
    }

    loadProjects() {
        let params = [
            `per_page=8`,
            `filter[meta_query][relation]=OR`,
            this.filterString()
        ]
        fetch(`${config.API_URL}wp/v2/project?${params.join('&')}`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                projects: response
            })
        })
    }

    filterString() {
        let params = []
        this.state.filters.forEach((row, index) => {
            if (row.active) {
                params.push(`filter[meta_query][${index}][key]=${row.name}`)
                params.push(`filter[meta_query][${index}][value]=${row.value}`)
                params.push(`filter[meta_query][${index}][compare]=${row.compare}`)
                params.push(`filter[meta_query][${index}][type]=${row.type}`)
            }
        })
        return params.join('&')
    }

    toggleCheck(index) {
        let filters = this.state.filters
        filters[index].active = !filters[index].active
        this.setState({ filters }, this.loadProjects)
    }

    resetFilters() {
        let filters = this.state.filters.map(row => ({...row, active: false}))
        this.setState({ filters }, this.loadProjects)
    }

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.title}>Готовые проекты домов</div>
                <div className={styles.filter}>
                    <div className={styles.label}>
                        Выберите<span className="uk-visible@l"> подходящую</span> площадь<span className="uk-visible@l"> дома</span>:
                    </div>
                    <div className={styles.inputs}>
                        {this.state.filters.map((filter, index) => (
                            <Checkbox
                                {...filter}
                                onChange={() => this.toggleCheck(index)}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className={styles.reset}>
                        <button
                            className={styles.resetButton}
                            type="button"
                            onClick={this.resetFilters}
                        >
                            <SvgIcon name="remove" />
                            <span>Сбросить</span>
                        </button>
                    </div>
                </div>
                <div className={styles.projects}>
                    <div className="uk-grid uk-grid-small" data-uk-grid>
                        {this.state.projects.map(row => (
                            <div className="uk-width-1-2@s uk-width-1-3@m uk-width-1-4@xl" key={row.id}>
                                <ProjectsTile
                                    title={row.title.rendered}
                                    slug={row.slug}
                                    image={row.thumbnail}
                                    {...row.acf}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.allWrap}>
                    <Link
                        to="katalog"
                        className={styles.allBtn}
                    >Показать все проекты</Link>
                </div>
            </section>
        )
    }
}

export default LandingProjects