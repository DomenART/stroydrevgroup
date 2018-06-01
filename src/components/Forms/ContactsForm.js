import React from 'react'
import Link from 'gatsby-link'
import Form from '../Forms/Form'
import Input from '../Forms/Input'
import Textarea from '../Forms/Textarea'
import ContactsFormSuccess from './ContactsFormSuccess'
import SvgIcon from '../UI/SvgIcon'
import styles from './ContactsForm.module.sass'

const ContactsForm = ({ icon, title, description }) =>
    <Form
        action="contact-form-7/v1/contact-forms/352/feedback"
        className={styles.box}
        method="post"
        encType='multipart/form-data'
        successMessage={<ContactsFormSuccess />}
    >
        <div className={styles.head}>
            <SvgIcon name={icon} className={styles.headIcon} />
            {title && (
                <div
                    className={styles.headTitle}
                    dangerouslySetInnerHTML={{__html:title}}
                />
            )}
            {description && (
                <div
                    className={styles.headDesc}
                    dangerouslySetInnerHTML={{__html:description}}
                />
            )}
        </div>
        <div className={styles.fields}>
            <div className="uk-margin-small">
                <Input
                    className="uk-input uk-width-1-1"
                    classNameInvalid="uk-form-danger"
                    classNameValid="uk-form-success"
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
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
                    name="message"
                    rows="3"
                    placeholder="Задайте свой вопрос"
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
            Прочитал(-а) <Link to={`#`}>пользовательское соглашение</Link> и соглашаюсь с <Link to={`#`}>политикой обработки персональных данных</Link>
        </label>
        <div className={styles.submit}>
            <button className="button-trust">Отправить</button>
        </div>
    </Form>

export default ContactsForm
