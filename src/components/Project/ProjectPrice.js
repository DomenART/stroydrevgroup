import React from 'react'
import Link from 'gatsby-link'
import Share from '../UI/Share'
import styles from './ProjectPrice.module.sass'
import SvgIcon from '../UI/SvgIcon';

const ProjectPrice = ({ price }) =>
    <div className={styles.container}>
        <div className={styles.price}>
            Цена:
            <span dangerouslySetInnerHTML={{
                __html: new Intl.NumberFormat('ru-RU').format(price)
            }} />
            руб.
        </div>
        <button className={`button-normal`} data-uk-toggle="target: #Consultation">
            Заказать консультацию
        </button>
    </div>

export default ProjectPrice