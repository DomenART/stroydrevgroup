import React, { Component } from 'react'
import styles from './FilterSelect.module.sass'

class FilterSelect extends Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
        this.findActive = this.findActive.bind(this)
    }

    handleSelect(e) {
        const {
            values, name, updateFilters
        } = this.props

        const filters = {}
        Object.keys(values).forEach(key => {
            filters[key] = {
                active: e.target.value === key
            }
        })
        updateFilters(name, filters)
    }

    findActive() {
        let active = -1
        for (let key in this.props.values) {
            if (this.props.values[key].active) {
                active = key
            }
        }
        return active
    }

    render() {
        const { placeholder, values } = this.props

        return (
            <select
                className={`${styles.select} select`}
                value={this.findActive()}
                onChange={this.handleSelect}
            >
                <option
                     value={-1}
                     dangerouslySetInnerHTML={{__html: placeholder}}
                 />
                 {Object.keys(values).map(key => (
                     <option
                         value={key}
                         dangerouslySetInnerHTML={{__html: values[key].title}}
                         disabled={values[key].disabled}
                         key={key}
                     />
                 ))}
            </select>
        )
    }
}

export default FilterSelect