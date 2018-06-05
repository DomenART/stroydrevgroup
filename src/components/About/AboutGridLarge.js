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
        <div className="uk-width-1-2">
            <AboutMenu items={menu} />
        </div>
        <div className="uk-width-1-2">
        </div>
        <div className="uk-width-1-2">
            <AboutIntro
                title={page.acf.intro_title}
                text={page.acf.intro_text}
                media={page.acf.intro_media}
            />
        </div>
        <div className="uk-width-1-2">
            <div className="uk-grid uk-grid-small" data-uk-grid>
                <div className="uk-width-1-2">
                    <AboutDate />
                </div>
                <div className="uk-width-1-2">
                    <AboutProduction />
                </div>
                <div className="uk-width-1-2">
                    <AboutProjects />
                </div>
                <div className="uk-width-1-2">
                    <AboutTechnologies />
                </div>
            </div>
        </div>
        <div className="uk-width-1-2">
            <AboutServices />
        </div>
        <div className="uk-width-1-2">
            <AboutPhotos />
        </div>
        <div className="uk-width-1-2">
            <AboutContent text={page.content} />
        </div>
        <div className="uk-width-1-2">
            <div className="uk-grid uk-grid-small" data-uk-grid>
                <div className="uk-width-1-2">
                    <AboutRewards />
                </div>
                <div className="uk-width-1-2">
                    <AboutReviews />
                </div>
                <div className="uk-width-1-">
                    <AboutInfo
                        title={page.acf.compare_title}
                        text={page.acf.compare_text}
                    />
                </div>
                <div className="uk-width-1-2">
                    <AboutOdnoklassniki />
                </div>
                <div className="uk-width-1-2">
                    <AboutUseful />
                </div>
            </div>
        </div>
        <div className="uk-width-1-2">
            <AboutConsultation />
        </div>
        <div className="uk-width-1-2">
            <div className="uk-grid uk-grid-small" data-uk-grid>
                <div className="uk-width-1-2">
                    <AboutInstagram />
                </div>
                <div className="uk-width-1-2">
                    <AboutFacebook />
                </div>
            </div>
        </div>
    </div>