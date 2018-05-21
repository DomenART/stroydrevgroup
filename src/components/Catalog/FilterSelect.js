import React, { Component } from 'react'
import { Context } from './FilterContext'
import styles from './FilterSelect.module.sass'

class FilterSelect extends Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(e) {
        const { group } = this.props

        this.meta_query[group] = {}
        this.values.forEach((filter, index) => {
            filter.active = e.target.value === String(index)
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

    getValue() {
        let value = ''
        this.values.forEach((row, index) => {
            if (row.active) value = index
        })
        return value
    }

    render() {
        const { group, placeholder } = this.props

        return (
            <Context.Consumer>
                {({ filters, query, actions }) => {
                    this.values = filters.filter(row => row.group == group)
                    this.meta_query = query.filter.meta_query
                    this.actions = actions

                    return (
                        <select
                            className={styles.select}
                            value={this.getValue()}
                            onChange={this.handleSelect}
                        >
                            <option
                                value=""
                                dangerouslySetInnerHTML={{__html: placeholder}}
                            />
                            {this.values.map((row, index) => (
                                <option
                                    value={index}
                                    dangerouslySetInnerHTML={{__html: row.title}}
                                    disabled={row.disabled}
                                    key={index}
                                />
                            ))}
                        </select>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default FilterSelect