import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import Input from './Input'
import Textarea from './Textarea'
import CalculationSuccess from './CalculationSuccess'
import Link from 'gatsby-link'
import styles from './ModalForm.module.sass'
import SvgIcon from '../UI/SvgIcon'

@connect(
    state => ({
        isBrowser: state.app.isBrowser,
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
            <div id="Calculation" ref="modal">
                <div className={`${styles.dialog} uk-modal-dialog`}>
                    <button className={styles.close} />
                    <Form
                        action="contact-form-7/v1/contact-forms/351/feedback"
                        className={styles.form}
                        method="post"
                        encType='multipart/form-data'
                        successMessage={<CalculationSuccess />}
                        successCallback={this.hideModal}
                    >
                        <div className={styles.body}>
                            <div className={styles.header}>
                                <div className={styles.headerIcon}>
                                    <SvgIcon name="clip" />
                                </div>
                                Рассчитайте мой проект
                                <span>БЕСПЛАТНО</span>
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
                                <div className={styles.file} data-uk-form-custom="target: true">
                                    <div className={styles.fileIcon}>
                                        <SvgIcon name="clip" />
                                    </div>
                                    <input type="file" name="file" onChange={this.changeInput} />
                                    <input type="text" className={styles.fileInput} placeholder="Прикрепить файл" disabled />
                                    <span className={styles.fileNote}>(не более 30 Мб)</span>
                                </div>
                                <hr className={styles.hr} />
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
