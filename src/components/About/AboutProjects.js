import React from 'react'
import AboutBox from './AboutBox'
import styles from './AboutProjects.module.sass'
import SvgIcon from '../UI/SvgIcon'

const AboutProjects = () =>
    <AboutBox
        parent={{
            to: "/katalog",
            title: "каталог"
        }}
        back={(
            <div className={styles.back}>
                <div className={styles.backIconWrap}>
                    <div className={styles.backIcon}>
                        <SvgIcon name="pencil" />
                    </div>
                </div>
                <soan className={styles.backMore}>
                    Смотреть проекты
                    <span />
                </soan>
            </div>
        )}
        front={(
            <div className={styles.front}>
                <div className={styles.frontIcon}>
                    <SvgIcon name="pencil" />
                </div>
                <div className={styles.frontTitle}>
                    Более 300<br/>
                    готовых проектов
                </div>
            </div>
        )}
    />

export default AboutProjects