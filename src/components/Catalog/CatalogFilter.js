import React, { Component, Fragment } from 'react'
import { Context, filters } from './FilterContext'
import FilterOuter from './FilterOuter'
import ProjectsRow from '../Projects/ProjectsRow'
import styles from './CatalogFilter.module.sass'
import config from '../../config.json'

class CatalogFilter extends Component {
    constructor(props) {
        super(props)
        this.setGroupValues = this.setGroupValues.bind(this)
        this.setGroupValue = this.setGroupValue.bind(this)
        this.state = {
            projects: [],
            filters: filters,
            actions: {
                setGroupValues: this.setGroupValues,
                setGroupValue: this.setGroupValue,
            }
        }
    }

    setGroupValues(group, values) {
        const filters = this.state.filters
        filters[group] = values
        this.setState({ filters }, this.updateFilter)
    }

    setGroupValue(group, index, value) {
        const filters = this.state.filters
        filters[group][index] = value
        this.setState({ filters }, this.updateFilter)
    }

    loadProjects() {
        let params = [
            `per_page=8`,
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

    filterString(exclude) {
        const params = []
        params.push(`filter[meta_query][relation]=AND`)
        Object.keys(this.state.filters).forEach((group, gIndex) => {
            if (this.state.filters[group].length && group != exclude) {
                params.push(`filter[meta_query][${gIndex}][relation]=OR`)
                this.state.filters[group].forEach((filter, fIndex) => {
                    if (filter.active) {
                        params.push(`filter[meta_query][${gIndex}][${fIndex}][key]=${filter.name}`)
                        params.push(`filter[meta_query][${gIndex}][${fIndex}][value]=${filter.value}`)
                        params.push(`filter[meta_query][${gIndex}][${fIndex}][compare]=${filter.compare}`)
                        params.push(`filter[meta_query][${gIndex}][${fIndex}][type]=${filter.type}`)
                    }
                })
            }
        })
        return params.join('&')
    }

    disableEmptyFilters() {
        Object.keys(this.state.filters).forEach((group, gIndex) => {
            this.state.filters[group].forEach((filter, fIndex) => {
                const params = [
                    `per_page=1`,
                    this.filterString(group)
                ]
                params.push(`filter[meta_query][${gIndex}][${fIndex}][key]=${filter.name}`)
                params.push(`filter[meta_query][${gIndex}][${fIndex}][value]=${filter.value}`)
                params.push(`filter[meta_query][${gIndex}][${fIndex}][compare]=${filter.compare}`)
                params.push(`filter[meta_query][${gIndex}][${fIndex}][type]=${filter.type}`)

                fetch(`${config.API_URL}wp/v2/project?${params.join('&')}`)
                .then(response => response.json())
                .then(response => {
                    const filters = this.state.filters
                    if (!filters[group][fIndex].active) {
                        filters[group][fIndex].disabled = response.length === 0
                    }
                    this.setState({ filters })
                })
            })
        })
    //     const params = []
    //     const groups = Object.keys(this.state.filters)
    //     params.push(`filter[meta_query][relation]=AND`)
    //     groups.forEach(currentGroup => {
    //         groups.forEach((group, gIndex) => {
    //             if (group != currentGroup && this.state.filters[group].length) {
    //                 params.push(`filter[meta_query][${gIndex}][relation]=OR`)
    //                 this.state.filters[group].forEach((filter, fIndex) => {
    //                     if (filter.active) {
    //                         params.push(`filter[meta_query][${gIndex}][${fIndex}][key]=${filter.name}`)
    //                         params.push(`filter[meta_query][${gIndex}][${fIndex}][value]=${filter.value}`)
    //                         params.push(`filter[meta_query][${gIndex}][${fIndex}][compare]=${filter.compare}`)
    //                         params.push(`filter[meta_query][${gIndex}][${fIndex}][type]=${filter.type}`)
    //                     }
    //                 })
    //             }
    //         })
    //     })
    //     return params.join('&')
    }

    updateFilter() {
        this.disableEmptyFilters()
        this.loadProjects()
    }

    componentDidMount() {
        this.updateFilter()
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                <FilterOuter />
                <div className={styles.projects}>
                    <div className="uk-grid uk-grid-small" data-uk-grid>
                        {this.state.projects.map(row => (
                            <div
                                className="uk-width-1-2@s uk-width-1-3@m uk-width-1-4@xl"
                                key={row.id}
                            >
                                <ProjectsRow
                                    title={row.title.rendered}
                                    slug={row.slug}
                                    image={row.thumbnail}
                                    {...row.acf}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Context.Provider>
        )
    }
}

export default CatalogFilter