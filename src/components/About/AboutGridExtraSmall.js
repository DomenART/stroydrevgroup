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
        <div className="uk-width-1-1">
            <AboutMenu items={menu} />
        </div>
        <div className="uk-width-1-1">
            <AboutIntro
                title={page.acf.intro_title}
                text={page.acf.intro_text}
                media={page.acf.intro_media}
            />
        </div>
        <div className="uk-width-1-1">
            <AboutDate />
        </div>
        <div className="uk-width-1-1">
            <AboutProduction />
        </div>
        <div className="uk-width-1-1">
            <AboutProjects />
        </div>
        <div className="uk-width-1-1">
            <AboutTechnologies />
        </div>
        <div className="uk-width-1-1">
            <AboutServices />
        </div>
        <div className="uk-width-1-1">
            <AboutPhotos />
        </div>
        <div className="uk-width-1-1">
            <AboutContent text={page.content} />
        </div>
        <div className="uk-width-1-1">
            <AboutRewards />
        </div>
        <div className="uk-width-1-1">
            <AboutReviews />
        </div>
        <div className="uk-width-1-">
            <AboutInfo
                title={page.acf.compare_title}
                text={page.acf.compare_text}
            />
        </div>
        <div className="uk-width-1-1">
            <AboutOdnoklassniki />
        </div>
        <div className="uk-width-1-1">
            <AboutUseful />
        </div>
        <div className="uk-width-1-1">
            <AboutInstagram />
        </div>
        <div className="uk-width-1-1">
            <AboutFacebook />
        </div>
        <div className="uk-width-1-1">
            <AboutConsultation relative={true} />
        </div>
    </div>