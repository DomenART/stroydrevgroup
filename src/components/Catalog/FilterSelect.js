import React, { Component } from 'react'
import { Context } from './FilterContext'
import styles from './FilterSelect.module.sass'

class FilterSelect extends Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(e, setGroupValues) {
        const values = this.values.map((row, index) => {
            row.active = e.target.value === String(index)
            return row
        })
        setGroupValues(this.props.group, values)
    }

    getValue() {
        let value = ''
        const active = this.values.map((row, index) => {
            if (row.active) value = index
        })
        return value
    }

    render() {
        const { group, placeholder } = this.props

        return (
            <Context.Consumer>
                {({ filters, actions }) => {
                    this.values = filters[group]

                    return (
                        <select
                            className={styles.select}
                            value={this.getValue()}
                            onChange={e => this.handleSelect(e, actions.setGroupValues)}
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