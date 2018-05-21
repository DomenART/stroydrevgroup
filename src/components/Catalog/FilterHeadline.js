import React from 'react'
import { Context } from './FilterContext'
import SvgIcon from '../UI/SvgIcon'
import styles from './FilterHeadline.module.sass'
// rows
// tiles
const FilterHeadline = () =>
    <Context.Consumer>
        {({ total, view, query, actions }) => {
            const { changeOrder, changeLimit, changeView } = actions

            let shown = query.per_page * query.page
            if (shown > total) shown = total

            const rowsCls = [styles.viewsBtn]
            if (view == 'row') {
                rowsCls.push(styles.viewsBtn_active)
            }
            const tilesCls = [styles.viewsBtn]
            if (view == 'tile') {
                tilesCls.push(styles.viewsBtn_active)
            }

            return (
                <div className={styles.container}>
                    <div className={styles.total}>
                        Проектов
                        <b dangerouslySetInnerHTML={{__html: shown}} />
                        из
                        <b dangerouslySetInnerHTML={{__html: total}} />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="sort">Сортировать:</label>
                        <select
                            className="select"
                            name="sort"
                            id="sort"
                            value={query.orderby}
                            onChange={e => changeOrder(e.target.value)}
                        >
                        <option value="menu_order">Популярные</option>
                            <option value="date">Новые</option>
                        </select>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="sort">Показывать по:</label>
                        <select
                            className="select"
                            name="per_page"
                            id="per_page"
                            value={query.per_page}
                            onChange={e => changeLimit(e.target.value)}
                        >
                            <option value="8">8</option>
                            <option value="24">24</option>
                            <option value="48">48</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <div className={styles.views}>
                        <button
                            className={tilesCls.join(' ')}
                            onClick={() => changeView('tile')}
                        >
                            <SvgIcon
                                name="tiles"
                                width={18}
                                height={18}
                            />
                        </button>
                        <button
                            className={rowsCls.join(' ')}
                            onClick={() => changeView('row')}
                        >
                            <SvgIcon
                                name="rows"
                                width={18}
                                height={13}
                            />
                        </button>
                    </div>
                </div>
            )
        }}
    </Context.Consumer>

export default FilterHeadline