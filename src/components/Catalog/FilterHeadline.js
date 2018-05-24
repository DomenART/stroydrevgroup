import React from 'react'
import SvgIcon from '../UI/SvgIcon'
import styles from './FilterHeadline.module.sass'

const FilterHeadline = ({
    total, page, per_page, view, orderBy, orderDir,
    setLimit, setView, setOrder
}) => {
    const rowsCls = [styles.viewsBtn]
    if (view == 'row') {
        rowsCls.push(styles.viewsBtn_active)
    }
    const tilesCls = [styles.viewsBtn]
    if (view == 'tile') {
        tilesCls.push(styles.viewsBtn_active)
    }

    let shown = per_page * page
    if (shown > total) shown = total

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
                    value={JSON.stringify({
                        by: orderBy,
                        dir: orderDir
                    })}
                    onChange={e => setOrder(JSON.parse(e.target.value))}
                >
                    <option
                        value={JSON.stringify({
                            by: 'menu_order',
                            dir: 'asc'
                        })}
                    >Популярные</option>
                    <option
                        value={JSON.stringify({
                            by: 'date',
                            dir: 'desc'
                        })}
                    >Новые</option>
                </select>
            </div>
            <div className={styles.control}>
                <label htmlFor="sort">Показывать по:</label>
                <select
                    className="select"
                    name="per_page"
                    id="per_page"
                    value={per_page}
                    onChange={e => setLimit(e.target.value)}
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
                    onClick={() => setView('tile')}
                >
                    <SvgIcon
                        name="tiles"
                        width={18}
                        height={18}
                    />
                </button>
                <button
                    className={rowsCls.join(' ')}
                    onClick={() => setView('row')}
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
}

export default FilterHeadline