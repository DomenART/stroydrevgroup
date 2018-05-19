import React from 'react'
import FilterSelect from './FilterSelect'
import FilterOptions from './FilterOptions'
import styles from './FilterOuter.module.sass'

const FilterOuter = () =>
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
                    group="type"
                />
            </div>
            <div className={styles.group}>
                <div className={styles.label}>
                    Материал:
                </div>
                <FilterSelect
                    placeholder="Все материалы"
                    group="material"
                />
            </div>
            <div className={styles.group}>
                <div className={styles.label}>
                    Площадь:
                </div>
                <FilterOptions
                    group="area"
                />
            </div>
            <div className={styles.group}>
                <div className={styles.label}>
                    Этажность:
                </div>
                <FilterOptions
                    group="floors"
                />
            </div>
        </div>
    </div>

export default FilterOuter