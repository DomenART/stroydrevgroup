import React, { Component } from 'react'
import FilterSelect from './FilterSelect'
import FilterOptions from './FilterOptions'
import isEqual from 'lodash/isEqual'
import styles from './CatalogFilter.module.sass'

class CatalogFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: [
                {
                    active: false,
                    disabled: false,
                    name: "type",
                    value: "Дома",
                    compare: "=",
                    type: "BINARY",
                    title: "Дома"
                }, {
                    active: false,
                    disabled: false,
                    name: "type",
                    value: "Дачные дома",
                    compare: "=",
                    type: "BINARY",
                    title: "Дачные дома"
                }, {
                    active: false,
                    disabled: false,
                    name: "type",
                    value: "Бытовки/беседки",
                    compare: "=",
                    type: "BINARY",
                    title: "Бытовки/беседки"
                }, {
                    active: false,
                    disabled: false,
                    name: "type",
                    value: "Часовни",
                    compare: "=",
                    type: "BINARY",
                    title: "Часовни"
                }, {
                    active: false,
                    disabled: false,
                    name: "area",
                    value: "100",
                    compare: "<",
                    type: "numeric",
                    title: "до 100 м<sup>2</sup>"
                }, {
                    active: false,
                    disabled: false,
                    name: "area",
                    value: "100",
                    compare: ">",
                    type: "numeric",
                    title: "больше 100 м<sup>2</sup>"
                }, {
                    active: false,
                    disabled: false,
                    name: "material",
                    value: "металлические",
                    compare: "=",
                    type: "BINARY",
                    title: "металлические"
                }, {
                    active: false,
                    disabled: false,
                    name: "material",
                    value: "деревянные",
                    compare: "=",
                    type: "BINARY",
                    title: "деревянные"
                }, {
                    active: false,
                    disabled: false,
                    name: "floors",
                    value: "1",
                    compare: "=",
                    type: "NUMERIC",
                    title: "1 этаж"
                }, {
                    active: false,
                    disabled: false,
                    name: "floors",
                    value: "1,5",
                    compare: "=",
                    type: "NUMERIC",
                    title: "1,5 эт."
                }, {
                    active: false,
                    disabled: false,
                    name: "floors",
                    value: "1,5",
                    compare: "=",
                    type: "NUMERIC",
                    title: "2 эт."
                }, {
                    active: false,
                    disabled: false,
                    name: "floors",
                    value: "2,5",
                    compare: "=",
                    type: "NUMERIC",
                    title: "2,5 эт."
                }
            ]
        }
        this.setFilter = this.setFilter.bind(this)
        this.resetFilters = this.resetFilters.bind(this)
    }

    componentDidMount() {
    }

    setFilter(filter) {
        let filters = this.state.filters.map(row => {
            if (isEqual(row, filter)) {
                row.active = true
            }
            return row
        })
        this.setState({ filters }, this.loadProjects)
    }

    loadProjects() {
        console.log(this.state.filters)
    }

    resetFilters() {

    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    Выберите<br />
                    подходящие параметры:
                </div>
                <div className={styles.filters}>
                    <div className={styles.group}>
                        <div className={styles.label}>
                            Тип строения:
                        </div>
                        <FilterSelect
                            name="type"
                            values={this.state.filters.filter(row => row.name == 'type')}
                            onChange={this.setFilter}
                        />
                    </div>
                    <div className={styles.group}>
                        <div className={styles.label}>
                            Материал:
                        </div>
                        <FilterSelect
                            name="material"
                            values={this.state.filters.filter(row => row.name == 'material')}
                            onChange={this.setFilter}
                        />
                    </div>
                    <div className={styles.group}>
                        <div className={styles.label}>
                            Площадь:
                        </div>
                        <FilterOptions
                            name="area"
                            values={this.state.filters.filter(row => row.name == 'area')}
                            onChange={this.setFilter}
                        />
                    </div>
                    <div className={styles.group}>
                        <div className={styles.label}>
                            Этажность:
                        </div>
                        <FilterOptions
                            name="floors"
                            values={this.state.filters.filter(row => row.name == 'floors')}
                            onChange={this.setFilter}
                        />
                    </div>
                </div>
            11a
            </div>
        )
    }
}

export default CatalogFilter