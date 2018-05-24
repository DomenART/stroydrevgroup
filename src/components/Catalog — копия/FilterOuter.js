import React from 'react'
import { Context } from './FilterContext'
import FilterSelect from './FilterSelect'
import FilterOptions from './FilterOptions'
import SvgIcon from '../UI/SvgIcon'
import styles from './FilterOuter.module.sass'

const FilterOuter = () =>
    <Context.Consumer>
        {({ actions }) => (
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
                        />
                    </div>
                    <div className={styles.group}>
                        <div className={styles.label}>
                            Материал:
                        </div>
                        <FilterSelect
                            placeholder="Все материалы"
                            name="material"
                        />
                    </div>
                    <div className={styles.group}>
                        <div className={styles.label}>
                            Площадь:
                        </div>
                        <div className={styles.options}>
                            <FilterOptions
                                name="area"
                            />
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.label}>
                            Этажность:
                        </div>
                        <div className={styles.options}>
                            <FilterOptions
                                name="floors"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={`${styles.buttonReset} button-jitney`}
                        type="button"
                        onClick={actions.resetFilters}
                    >
                        <SvgIcon name="remove" />
                        <span>Сбросить</span>
                    </button>
                </div>
            </div>
        )}
    </Context.Consumer>

export default FilterOuter