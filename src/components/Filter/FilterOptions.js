import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import styles from './FilterOptions.module.sass'

class FilterOptions extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {
            options, active = [], onChange
        } = this.props
        const values = []

        Object.keys(options).map(key => {
            if (e.target.value == key) {
                if (active.indexOf(key) == -1) {
                    values.push(key)
                }
            } else {
                if (active.indexOf(key) != -1) {
                    values.push(key)
                }
            }
        })

        onChange(values)
    }

    render() {
        const { name, options, active = [], disabled = [] } = this.props

        return (
            <Fragment>
                {Object.keys(options).map(key => (
                    <label className={classNames(styles.option, 'option')} key={key}>
                        <input
                            type="checkbox"
                            className={styles.input}
                            name={name}
                            value={key}
                            onChange={this.handleChange}
                            checked={active.indexOf(key) != -1}
                            disabled={disabled.indexOf(key) != -1}
                        />
                        <div
                            className={styles.title}
                            dangerouslySetInnerHTML={{__html: options[key]}}
                        />
                    </label>
                ))}
            </Fragment>
        )
    }
}

export default FilterOptions