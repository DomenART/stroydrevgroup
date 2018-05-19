import React, { Component } from 'react'
import styles from './FilterOptions.module.sass'

class FilterOptions extends Component {
    render() {
        const { name, values } = this.props

        return (
            <div className={styles.options}>
                {values.map((row, index) => (
                    <label className={styles.option} key={index}>
                        <input
                            type="checkbox"
                            className={styles.input}
                            name={name}
                            value={row.value}
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
    }
}

export default FilterOptions