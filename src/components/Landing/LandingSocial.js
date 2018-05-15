import React from 'react'
import SvgIcon from '../UI/SvgIcon'
import SocialGroup from './SocialGroup'
import LandingGeography from './LandingGeography'
import styles from './LandingSocial.module.sass'

const LandingSocial = () =>
    <section className={styles.container}>
        <div className="uk-grid" data-uk-grid>
            <div className="uk-width-2-3 uk-visible@s">
                <h3 className={`${styles.title} ${styles.col_first}`}>
                    Мы в соцсетях: #стройдрев
                </h3>
                <div className="uk-grid" data-uk-grid>
                    <div className="uk-width-1-2">
                        <SocialGroup
                            title="@stroydrevgroup"
                            icon={(
                                <SvgIcon name="instagram" style={{
                                    fill: '#6f4a2d',
                                    width: '24px',
                                    height: '24px'
                                }}/>
                            )}
                            link="#"
                        >
                            Картинка инстаграма
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            Картинка инстаграма
                        </SocialGroup>
                    </div>
                    <div className="uk-width-1-2">
                        <SocialGroup
                            title="Стройдрев"
                            icon={(
                                <SvgIcon name="facebook-square" style={{
                                    fill: '#2a5885',
                                    width: '24px',
                                    height: '24px'
                                }}/>
                            )}
                            link="#"
                        >
                            Группа фейсбука
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            Группа фейсбука
                        </SocialGroup>
                    </div>
                </div>
            </div>
            <div className="uk-width-1-3@s uk-flex uk-flex-column">
                <h3 className={`${styles.title} ${styles.col_second}`}>
                    География работы
                </h3>
                <LandingGeography />
            </div>
        </div>
    </section>

export default LandingSocial
