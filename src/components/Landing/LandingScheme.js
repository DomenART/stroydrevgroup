import React from 'react'
import Item from './LandingSchemeItem'
import SvgIcon from '../UI/SvgIcon'
import styles from './LandingScheme.module.sass'

const LandingScheme = ({ title, items }) =>
    <section className={styles.container}>
        <div className={styles.title}>
            <span dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        <div className={`${styles.grid} uk-grid uk-child-width-1-2 uk-child-width-1-6@s`} data-uk-grid>
            {items.map((item, index) =>
                <Item
                    {...item}
                    arrow={
                        items.length - 1 == index
                        ? 'arrow-scheme-long'
                        : 'arrow-scheme'
                    }
                    key={index}
                />
            )}
        </div>
    </section>

export default LandingScheme
