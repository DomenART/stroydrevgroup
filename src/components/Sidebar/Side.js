import React from 'react'
import Link from 'gatsby-link'
import SocialGroups from './SocialGroups'
import Menu from './Menu'
import SvgIcon from '../UI/SvgIcon'
import styles from './Side.module.sass'

const Side = ({ catalog, about, info, phone, isDrawerOpen, setRef }) => {
    let sideCls = [styles.side]
    if (isDrawerOpen) {
        sideCls.push(styles.side_shadow)
    }

    return (
        <div className={sideCls.join(' ')} ref={setRef}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={require('../../assets/logo.png')} alt="" width="137" height="48" />
                </Link>
            </div>

            <form className={styles.search}>
                <input
                    name="query"
                    placeholder="Поиск по сайту"
                    className={styles.searchInput}
                />
                <button className={styles.searchButton}>
                    <SvgIcon name="search" />
                </button>
            </form>

            <div className={styles.contact}>
                <div className={styles.phone}>
                    <a
                        href={`tel:${phone}`}
                        dangerouslySetInnerHTML={{__html: phone}}
                    />
                </div>

                <div className={styles.calc}>
                    <div className={styles.calcWrap}>
                        <button
                            className={styles.calcButton}
                            data-uk-toggle="target: #Calculation"
                        >
                            <SvgIcon name="calculator" />
                            Заказать расчет
                        </button>
                        <button
                            className={styles.calcTooltip}
                            data-uk-tooltip="pos: bottom-left; title: Каждый проект индивидуален. На сайте указаны типовые цены проекта, для уточнения цены оставьте заяку на расчет стоимости"
                        >?</button>
                    </div>
                </div>
            </div>

            <div className={styles.menus}>
                <Menu type="main" items={catalog} />
                <Menu type="second" items={about} />
                <Menu type="second" items={info} />
            </div>

            <SocialGroups className={styles.groups} />
        </div>
    )
}
export default Side
