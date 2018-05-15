import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import ContactsRow from './ContactsRow'
import ContactsForm from '../Forms/ContactsForm'
import SvgIcon from '../UI/SvgIcon'
import {
    FacebookShareButton,
    FacebookIcon,
    MailruShareButton,
    MailruIcon,
    GooglePlusShareButton,
    GooglePlusIcon,
    PinterestShareButton,
    PinterestIcon,
    OKShareButton,
    OKIcon,
    VKShareButton,
    VKIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'react-share'
import styles from './LandingContacts.module.sass'

class LandingContacts extends Component {
    render() {
        const { isMediumMax, isExtraSmall } = this.props.resolution

        let iconSize = 48
        if (isMediumMax) {
            iconSize = 42
        }
        if (isExtraSmall) {
            iconSize = 37
        }

        const feedback = (
            <div className={styles.feedback}>
                <button
                    className={`button-trust ${styles.feedbackButton}`}
                    data-uk-toggle="target: #Feedback"
                >
                    <SvgIcon name="question" />
                    Задать вопрос
                </button>
            </div>
        )

        return (
            <section className={styles.container}>
                <div className="uk-grid" data-uk-grid>
                    <div className="uk-width-2-3@xl">
                        <div className="uk-grid" data-uk-grid>
                            <div className="uk-width-1-2@s">
                                <h3 className={styles.title}>
                                    Контакты:
                                </h3>
                                {this.props.contacts_footer.map((row, index) => (
                                    <ContactsRow {...row} key={index} />
                                ))}
                                {isExtraSmall && feedback}
                            </div>
                            <div className={`${styles.share_cell} uk-width-1-2@s uk-flex uk-flex-column`}>
                                <h3 className={styles.title}>
                                    Поделиться:
                                </h3>
                                <div className={styles.share}>
                                    <FacebookShareButton
                                        url={this.props.pathname}
                                        children={<FacebookIcon size={iconSize} />}
                                    />
                                    <MailruShareButton
                                        url={this.props.pathname}
                                        children={<MailruIcon size={iconSize} />}
                                    />
                                    <GooglePlusShareButton
                                        url={this.props.pathname}
                                        children={<GooglePlusIcon size={iconSize} />}
                                    />
                                    {/*<PinterestShareButton
                                        url={this.props.pathname}
                                        children={<PinterestIcon size={iconSize} />}
                                    />*/}
                                    <OKShareButton
                                        url={this.props.pathname}
                                        children={<OKIcon size={iconSize} />}
                                    />
                                    <VKShareButton
                                        url={this.props.pathname}
                                        children={<VKIcon size={iconSize} />}
                                    />
                                    <TwitterShareButton
                                        url={this.props.pathname}
                                        children={<TwitterIcon size={iconSize} />}
                                    />
                                </div>
                                {!isExtraSmall && feedback}
                            </div>
                            <div className="uk-width-1-2">
                                <Link to={`#`} className={styles.link}>
                                    Политика конфиденциальности и обработки персональных данных
                                </Link>
                            </div>
                            <div className={`${isExtraSmall ? 'uk-text-right' : ''} uk-width-1-2`}>
                                <Link to={`#`} className={styles.link}>
                                    Пользовательское соглашение
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-3@xl uk-visible@xl">
                        <ContactsForm />
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(
    state => ({
        pathname: state.app.pathname,
        contacts_footer: state.app.options.contacts_footer,
        resolution: state.resolution
    })
)(LandingContacts)