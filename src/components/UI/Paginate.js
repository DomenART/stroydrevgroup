import React from 'react'
import ReactPaginate from 'react-paginate'
import SvgIcon from '../UI/SvgIcon'
import styles from './Paginate.module.sass'

export default ({ total, forcePage, onChange }) => {
    const params = {
        previousLabel: <SvgIcon name="small-chevron-left" />,
        previousClassName: styles.previous,
        nextLabel: <SvgIcon name="small-chevron-right" />,
        nextClassName: styles.next,
        breakLabel: "...",
        breakClassName: styles.break,
        pageCount: total,
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 5,
        onPageChange: onChange,
        containerClassName: styles.container,
        subContainerClassName: styles.subcontainer,
        activeClassName: styles.active
    }
    if (typeof(forcePage) != 'undefined') {
        params.forcePage = forcePage
    }
    return (
        <ReactPaginate {...params} />
    )
}