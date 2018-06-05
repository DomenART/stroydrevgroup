import React from 'react'
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
    <div className="uk-grid uk-grid-small" data-uk-grid>
        <div className="uk-width-3-4">
            <AboutMenu items={menu} />
        </div>
        <div className="uk-width-2-3">
            <AboutIntro
                title={page.acf.intro_title}
                text={page.acf.intro_text}
                media={page.acf.intro_media}
            />
        </div>
        <div className="uk-width-1-3">
            <div className="uk-grid uk-grid-small" data-uk-grid>
                <div className="uk-width-1-1">
                    <AboutDate />
                </div>
                <div className="uk-width-1-1">
                    <AboutProduction />
                </div>
            </div>
        </div>
        <div className="uk-width-1-3">
            <AboutProjects />
        </div>
        <div className="uk-width-2-3">
            <AboutServices />
        </div>
        <div className="uk-width-2-3">
            <AboutPhotos />
        </div>
        <div className="uk-width-1-3">
            <AboutTechnologies />
        </div>
        <div className="uk-width-1-3">
            <div className="uk-grid uk-grid-small" data-uk-grid>
                <div className="uk-width-1-1">
                    <AboutRewards />
                </div>
                <div className="uk-width-1-1">
                    <AboutReviews />
                </div>
            </div>
        </div>
        <div className="uk-width-2-3">
            <AboutContent text={page.content} />
        </div>
        <div className="uk-width-2-3">
            <AboutInfo
                title={page.acf.compare_title}
                text={page.acf.compare_text}
            />
        </div>
        <div className="uk-width-1-3">
            <AboutUseful />
        </div>
        <div className="uk-width-1-3">
            <AboutOdnoklassniki />
        </div>
        <div className="uk-width-1-3">
            <AboutFacebook />
        </div>
        <div className="uk-width-1-3">
            <AboutInstagram />
        </div>
        <div className="uk-width-1-1">
            <AboutConsultation relative={true} />
        </div>
    </div>