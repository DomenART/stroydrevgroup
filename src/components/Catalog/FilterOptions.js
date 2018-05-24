import React, { Component, Fragment } from 'react'
import styles from './FilterOptions.module.sass'
import config from '../../config.json'

class FilterOptions extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {
            values, name, updateFilters
        } = this.props

        updateFilters(name, {
            [e.target.value]: {
                active: !values[e.target.value].active
            }
        })
    }

    render() {
        const { name, values } = this.props

        return (
            <Fragment>
                {Object.keys(values).map(key => (
                    <label className={`${styles.option} option`} key={key}>
                        <input
                            type="checkbox"
                            className={styles.input}
                            name={values[key].name}
                            value={key}
                            onChange={this.handleChange}
                            checked={values[key].active}
                            disabled={values[key].disabled}
                        />
                        <div
                            className={styles.title}
                            dangerouslySetInnerHTML={{__html: values[key].title}}
                        />
                    </label>
                ))}
            </Fragment>
        )
    }
}

export default FilterOptions