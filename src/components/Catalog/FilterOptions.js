import React, { Component } from 'react'
import { Context } from './FilterContext'
import styles from './FilterOptions.module.sass'
import config from '../../config.json'

class FilterOptions extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e, setGroupValue) {
        const values = this.values
        const index = e.target.value
        const value = values[index]
        value.active = !value.active
        setGroupValue(this.props.group, index, value)
    }

    render() {
        const { group } = this.props

        return (
            <Context.Consumer>
                {({ filters, actions }) => {
                    this.values = filters[group]

                    return (
                        <div className={styles.options}>
                            {this.values.map((row, index) => (
                                <label className={styles.option} key={index}>
                                    <input
                                        type="checkbox"
                                        className={styles.input}
                                        name={group}
                                        value={index}
                                        onChange={e => this.handleChange(e, actions.setGroupValue)}
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