import React from 'react'
import FilterSelect from './FilterSelect'
import FilterOptions from './FilterOptions'
import SvgIcon from '../UI/SvgIcon'
import styles from './FilterOuter.module.sass'

const FilterOuter = ({ filters, updateFilters, activateFilter, deactivateFilter }) =>
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
                    placeholder="Все типы"
                    name="type"
                    values={filters['type']}
                    updateFilters={updateFilters}
                    activateFilter={activateFilter}
                    deactivateFilter={deactivateFilter}
                />
            </div>
            <div className={styles.group}>
                <div className={styles.label}>
                    Материал:
                </div>
                <FilterSelect
                    placeholder="Все материалы"
                    name="material"
                    values={filters['material']}
                    updateFilters={updateFilters}
                    activateFilter={activateFilter}
                    deactivateFilter={deactivateFilter}
                />
            </div>
            <div className={styles.group}>
                <div className={styles.label}>
                    Площадь:
                </div>
                <div className={styles.options}>
                    <FilterOptions
                        name="area"
                        values={filters['area']}
                        updateFilters={updateFilters}
                    />
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.label}>
                    Этажность:
                </div>
                <div className={styles.options}>
                    {/* <FilterOptions
                        name="floors"
                        values={filters.filter(row => row.name == 'floors')}
                    /> */}
                </div>
            </div>
        </div>
        <div className={styles.buttons}>
            <button
                className={`${styles.buttonReset} button-jitney`}
                type="button"
                // onClick={actions.resetFilters}
            >
                <SvgIcon name="remove" />
                <span>Сбросить</span>
            </button>
        </div>
    </div>

export default FilterOuter