import React from 'react'
import styles from './AboutGrid.module.sass'
import AboutMenu from './AboutMenu'
import AboutIntro from './AboutIntro'
import AboutDate from './AboutDate'
import AboutProduction from './AboutProduction'
import AboutProjects from './AboutProjects'
import AboutTechnologies from './AboutTechnologies'
import AboutServices from './AboutServices'
import AboutPhotos from './AboutPhotos'
import AboutContent from './AboutContent'
import AboutRewards from './AboutRewards'
import AboutReviews from './AboutReviews'
import AboutInfo from './AboutInfo'
import AboutOdnoklassniki from './AboutOdnoklassniki'
import AboutUseful from './AboutUseful'
import AboutFacebook from './AboutFacebook'
import AboutInstagram from './AboutInstagram'
import AboutConsultation from './AboutConsultation'

export default ({ menu, page }) =>
    <div className={styles.grid}>
        <div className={styles.cell_1}>
            <AboutMenu items={menu} />
        </div>
        <div className={styles.cell_2}>
            <AboutIntro
                title={page.acf.intro_title}
                text={page.acf.intro_text}
                media={page.acf.intro_media}
            />
        </div>
        <div className={styles.cell_3}>
            <AboutDate />
        </div>
        <div className={styles.cell_4}>
            <AboutProduction />
        </div>
        <div className={styles.cell_5}>
            <AboutProjects />
        </div>
        <div className={styles.cell_6}>
            <AboutTechnologies />
        </div>
        <div className={styles.cell_7}>
            <AboutServices />
        </div>
        <div className={styles.cell_8}>
            <AboutPhotos />
        </div>
        <div className={styles.cell_9}>
            <AboutContent text={page.content} />
        </div>
        <div className={styles.cell_10}>
            <AboutRewards />
        </div>
        <div className={styles.cell_11}>
            <AboutReviews />
        </div>
        <div className={styles.cell_12}>
            <AboutInfo
                title={page.acf.compare_title}
                text={page.acf.compare_text}
            />
        </div>
        <div className={styles.cell_13}>
            <AboutOdnoklassniki />
        </div>
        <div className={styles.cell_14}>
            <AboutUseful />
        </div>
        <div className={styles.cell_15}>
            <AboutInstagram />
        </div>
        <div className={styles.cell_16}>
            <AboutFacebook />
        </div>
        <div className={styles.cell_17}>
            <AboutConsultation />
        </div>
    </div>