import React from 'react'
import ReactPaginate from 'react-paginate'
import SvgIcon from '../UI/SvgIcon'
import styles from './Paginate.module.sass'

export default ({ total, onChange }) =>
    <ReactPaginate
        previousLabel={<SvgIcon name="small-chevron-left" />}
        nextLabel={<SvgIcon name="small-chevron-right" />}
        breakLabel={"..."}
        breakClassName={"break"}
        pageCount={total}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
    />