import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import styles from './ContactsFormSuccess.module.sass'
import SvgIcon from '../UI/SvgIcon'

@connect(
    state => ({
        phone: state.app.options.phone
    })
)
class ContactsFormSuccess extends Component {
    render() {
        const { phone } = this.props

        return (
            <div className={styles.box}>
                <div className={styles.head}>
                    <div className={styles.icon}>
                        <SvgIcon name="check" />
                    </div>
                    <div className={styles.title}>
                        Заявка успешно отправлена.
                    </div>
                </div>
                <div className={styles.body}>
                    <p>
                        Мы свяжемся с вами в ближайшее время.
                    </p>
                    <p>
                        Также вы можете позвонить по телефону:
                    </p>
                </div>
                <div
                    className={styles.phone}
                    dangerouslySetInnerHTML={{
                        __html: phone
                    }}
                />
                <div className={styles.phoneDesc}>
                    звонок по России бесплатный
                </div>
            </div>
        )
    }
}

export default ContactsFormSuccess
