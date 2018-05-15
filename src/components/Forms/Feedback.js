import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import Input from './Input'
import Textarea from './Textarea'
import FeedbackSuccess from './FeedbackSuccess'
import Link from 'gatsby-link'
import styles from './ModalForm.module.sass'
import SvgIcon from '../UI/SvgIcon'

@connect(
    state => ({
        phone: state.app.options.phone
    })
)
class Calculation extends Component {
    constructor(props) {
        super(props)

        this.hideModal = this.hideModal.bind(this)
    }

    componentDidMount() {
        this.modal = UIkit.modal(this.refs.modal, {
            selClose: `.${styles.close}`,
            container: false
        })
    }

    hideModal() {
        this.modal.hide()
    }

    render() {
        return (
            <div id="Feedback" ref="modal">
                <div className={`${styles.dialog} uk-modal-dialog`}>
                    <button className={styles.close} />
                    <Form
                        action="contact-form-7/v1/contact-forms/352/feedback"
                        className={styles.form}
                        method="post"
                        encType='multipart/form-data'
                        successMessage={<FeedbackSuccess />}
                        successCallback={this.hideModal}
                    >
                        <div className={styles.body}>
                            <div className={styles.header}>
                                <div className={styles.headerIcon}>
                                    <SvgIcon name="question" />
                                </div>
                                Хочу задать вопрос
                                <span>Отправьте нам сообщение, и мы свяжемся с вами в ближайшее время</span>
                            </div>
                            <div className={styles.fields}>
                                <div className="uk-margin-small">
                                    <Input
                                        className="uk-input uk-width-1-1"
                                        classNameInvalid="uk-form-danger"
                                        classNameValid="uk-form-success"
                                        type="text"
                                        name="forename"
                                        placeholder="Имя"
                                    />
                                </div>
                                <div className="uk-margin-small">
                                    <Input
                                        className="uk-input uk-width-1-1"
                                        classNameInvalid="uk-form-danger"
                                        classNameValid="uk-form-success"
                                        type="email"
                                        name="email"
                                        placeholder="E-mail*"
                                        required
                                    />
                                </div>
                                <div className="uk-margin-small">
                                    <Input
                                        className="uk-input uk-width-1-1"
                                        classNameInvalid="uk-form-danger"
                                        classNameValid="uk-form-success"
                                        type="tel"
                                        name="phone"
                                        placeholder="Телефон"
                                    />
                                </div>
                                <div className="uk-margin-small">
                                    <Textarea
                                        className="uk-textarea uk-width-1-1"
                                        classNameInvalid="uk-form-danger"
                                        classNameValid="uk-form-success"
                                        rows="2"
                                        name="message"
                                        placeholder="Комментарий"
                                    />
                                </div>
                            </div>
                            <label className={styles.rights}>
                                <Input
                                    className="uk-checkbox"
                                    classNameInvalid="uk-form-danger"
                                    classNameValid="uk-form-success"
                                    type="checkbox"
                                    name="rules"
                                    value="1"
                                    required
                                />
                                Прочитал(-а) <Link to={`#`}>пользовательское соглашение</Link> и соглашаюсь с&nbsp;<Link to={`#`}>политикой обработки персональных данных</Link>
                            </label>
                        </div>
                        <div className={styles.footer}>
                            <button type="submit" className={`${styles.submit} button-trust`}>Отправить</button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Calculation
