import React from 'react'
import styles from './LandingBanners.module.sass'
import SvgIcon from '../UI/SvgIcon'

const LandingBanners = () =>
    <div className={styles.banners}>
        <div className="uk-grid uk-grid-small" data-uk-grid>
            <div className="uk-width-1-2@s uk-width-1-4@l">
                <div className={`${styles.banner} ${styles.banner_orange}`}>
                    <div className={styles.left}>
                        <div className={styles.icon}>
                            <SvgIcon name="banner-1" style={{
                                fontSize: `${47 / 18}em`,
                                marginTop: `-${3 / 47}em`
                            }} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.addTitle}>Водоснабжение + отопление<br /> + электричество</div>
                        <div className={styles.addLink}>Дополнительные услуги</div>
                    </div>
                </div>
            </div>

            <div className="uk-width-1-2@s uk-width-1-4@l">
                <div className={`${styles.banner} ${styles.banner_red}`}>
                    <div className={styles.left}>
                        <div className={styles.icon}>
                            <SvgIcon name="banner-2" style={{
                                fontSize: `${56 / 18}em`,
                                marginTop: `-${1 / 56}em`
                            }} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.category}>При заказе</div>
                        <div className={styles.title}>Дом+Баня</div>
                        <div className={styles.info}>только до 28 мая 2018</div>
                    </div>
                </div>
            </div>

            <div className="uk-width-1-2@s uk-width-1-4@l">
                <div
                    className={`${styles.banner} ${styles.banner_green}`}
                    data-uk-toggle="target: #CalculationIndividual"
                >
                    <div className={styles.left}>
                        <div className={styles.icon}>
                            <SvgIcon name="banner-3" style={{
                                fontSize: `${38 / 18}em`
                            }} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.indLink}>Индивидуальный расчет</div>
                        <div className={styles.indDesc}>
                            вашего проекта
                            <SvgIcon name="label-free" />
                        </div>
                        <div className={styles.indLoad}>Загрузите проект, мы рассчитаем его цену</div>
                    </div>
                </div>
            </div>

            <div className="uk-width-1-2@s uk-width-1-4@l">
                <div className={`${styles.banner} ${styles.banner_pink}`}>
                    <div className={styles.left}>
                        <div className={styles.icon}>
                            <SvgIcon name="banner-4" style={{
                                fontSize: `${43 / 18}em`,
                                marginTop: `-${1 / 43}em`
                            }} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.category}>выгодные условия</div>
                        <div className={styles.title}>Доставка</div>
                        <div className={styles.info}>Уточняйте у менеджеров</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default LandingBanners