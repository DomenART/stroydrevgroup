import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import ContactsRow from '../Contacts/ContactsRow'
import ContactsForm from '../Forms/ContactsForm'
import SvgIcon from '../UI/SvgIcon'
import Share from '../UI/Share'
import styles from './LandingContacts.module.sass'

class LandingContacts extends Component {
    render() {
        const { isExtraSmall } = this.props.resolution

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
                                    <Share />
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
                        <div className={styles.form}>
                            <ContactsForm
                                icon="question"
                                title="Хочу задать вопрос"
                                description="Отправьте нам сообщение, и мы свяжемся с вами в ближайшее время"
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(
    state => ({
        contacts_footer: state.app.options.contacts_footer,
        resolution: state.resolution
    })
)(LandingContacts)