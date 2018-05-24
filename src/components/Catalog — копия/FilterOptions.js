import React, { Component, Fragment } from 'react'
import { Context } from './FilterContext'
import styles from './FilterOptions.module.sass'
import config from '../../config.json'

class FilterOptions extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name } = this.props
        const index = e.target.value
        const value = this.values[index]
        value.active = !value.active

        this.meta_query[name] = {}
        this.values.forEach((filter, index) => {
            if (filter.active) {
                this.meta_query[name][index] = {
                    key: name,
                    value: filter.value,
                    compare: filter.compare,
                    type: filter.type
                }
            }
        })

        if (Object.keys(this.meta_query[name]).length) {
            this.meta_query[name]['relation'] = 'OR'
        }

        this.actions.updateMetaQuery(this.meta_query)
    }

    render() {
        const { name } = this.props

        return (
            <Context.Consumer>
                {({ filters, query, actions }) => {
                    this.values = filters.filter(row => row.name == name)[0].values || []
                    this.meta_query = query.filter.meta_query
                    this.actions = actions

                    return (
                        <Fragment>
                            {this.values.map((row, index) => (
                                <label className={`${styles.option} option`} key={index}>
                                    <input
                                        type="checkbox"
                                        className={styles.input}
                                        name={row.name}
                                        value={index}
                                        onChange={this.handleChange}
                                        checked={row.active}
                                        disabled={row.disabled}
                                    />
                                    <div
                                        className={styles.title}
                                        dangerouslySetInnerHTML={{__html: row.title}}
                                    />
                                </label>
                            ))}
                        </Fragment>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default FilterOptions