import React, { Component } from 'react'
import { Context } from './FilterContext'
import styles from './FilterOptions.module.sass'
import config from '../../config.json'

class FilterOptions extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { group } = this.props
        const index = e.target.value
        const value = this.values[index]
        value.active = !value.active

        this.meta_query[group] = {}
        this.values.forEach((filter, index) => {
            if (filter.active) {
                this.meta_query[group][index] = {
                    key: filter.name,
                    value: filter.value,
                    compare: filter.compare,
                    type: filter.type
                }
            }
        })

        if (Object.keys(this.meta_query[group]).length) {
            this.meta_query[group]['relation'] = 'OR'
        }

        this.actions.updateMetaQuery(this.meta_query)
    }

    render() {
        const { group } = this.props

        return (
            <Context.Consumer>
                {({ filters, query, actions }) => {
                    this.values = filters.filter(row => row.group == group)
                    this.meta_query = query.filter.meta_query
                    this.actions = actions

                    return (
                        <div className={styles.options}>
                            {this.values.map((row, index) => (
                                <label className={styles.option} key={index}>
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
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default FilterOptions