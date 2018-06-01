import React, { Fragment } from 'react'
import styles from './ContactsSocial.module.sass'
import ContactsForm from '../Forms/ContactsForm'
import SocialGroup from './SocialGroup'
import SvgIcon from '../UI/SvgIcon'

const ContactsSocial = ({ groups }) =>
    <div className={styles.container}>
        <div className="uk-grid" data-uk-grid>
            <div className="uk-width-1-3@l">
                <h3 className={styles.title}>Обратная связь</h3>
                <ContactsForm
                    icon="at"
                    title="Свяжитесь с нами"
                />
            </div>
            <div className="uk-width-2-3@l">
                <h3 className={styles.title}>Мы в соцсетях: #стройдрев</h3>
                <div className="uk-grid" data-uk-grid>
                    <div className="uk-width-1-2@s">
                        <SocialGroup
                            title="@stroydrevgroup"
                            icon={(
                                <SvgIcon name="instagram" style={{
                                    fill: '#6f4a2d',
                                    width: '24px',
                                    height: '24px'
                                }}/>
                            )}
                            link="#"
                        >
                            Картинка инстаграма
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            Картинка инстаграма
                        </SocialGroup>
                    </div>
                    <div className="uk-width-1-2@s">
                        <SocialGroup
                            title="Стройдрев"
                            icon={(
                                <SvgIcon name="facebook-square" style={{
                                    fill: '#2a5885',
                                    width: '24px',
                                    height: '24px'
                                }}/>
                            )}
                            link="#"
                        >
                            Группа фейсбука
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            Группа фейсбука
                        </SocialGroup>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default ContactsSocial