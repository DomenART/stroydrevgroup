import React, { Component } from 'react'
import styles from './FilterSelect.module.sass'

class FilterSelect extends Component {
    constructor(props) {
        super(props)
    }

    // prepare() {
    //     fetch(`${config.API_URL}wp/v2/project?filter[meta_query][0][key]=area&filter[meta_query][0][value]=100`)
    //     .then(response => response.json())
    //     .then(response => {
    //         this.setState({
    //             projects: response
    //         })
    //     })

    // }

    render() {
        const { name, values, onChange } = this.props

        let value = ''
        const active = values.find(row => row.active)
        if (active) {
            value = active.value
        }

        return (
            <select
                className={styles.select}
                name={name}
                defaultValue={value}
                // onChange={() => onChange(name, index)}
            >
                <option value="">Не выбрано</option>
                {values.map((row, index) => (
                    <option
                        value={row.value}
                        dangerouslySetInnerHTML={{__html: row.title}}
                        disabled={row.disabled}
                        key={index}
                    />
                ))}
            </select>
        )
    }
}

export default FilterSelect