import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './FilterSelect.module.sass'

class FilterSelect extends Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(e) {
        const values = e.target.value ? [e.target.value] : []
        this.props.onChange(values)
    }

    render() {
        const { placeholder, name, options, active = [], disabled = [] } = this.props

        return (
            <select
                className={classNames(styles.select, 'select')}
                name={name}
                value={active[0] || ''}
                onChange={this.handleSelect}
            >
                <option
                    value=''
                    dangerouslySetInnerHTML={{__html: placeholder}}
                />
                {Object.keys(options).map(key => (
                    <option
                        value={key}
                        dangerouslySetInnerHTML={{__html: options[key]}}
                        disabled={disabled.indexOf(key) != -1}
                        key={key}
                    />
                ))}
            </select>
        )
    }
}

export default FilterSelect