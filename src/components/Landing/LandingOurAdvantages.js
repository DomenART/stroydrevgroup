import React from 'react'
import styles from './LandingOurAdvantages.module.sass'
import SvgIcon from '../UI/SvgIcon'

const Advantage = ({ title, desc, image }) =>
    <div className="uk-width-1-2">
        <div className={styles.item}>
            <div className={styles.itemImage}>
                <img src={image.localFile.publicURL} alt="" />
            </div>

            <div
                className={styles.itemTitle}
                dangerouslySetInnerHTML={{ __html: title }}
            />

            <div
                className={styles.itemDesc}
                dangerouslySetInnerHTML={{ __html: desc }}
            />
        </div>
    </div>

const LandingOurAdvantages = ({ title, items }) =>
    <section className={styles.container}>
        <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
        />
        {/* <div className={styles.grid}> */}
        <div className="uk-grid" data-uk-grid>
            {items.map((item, index) => <Advantage {...item} key={index} />)}
        </div>
    </section>

export default LandingOurAdvantages
