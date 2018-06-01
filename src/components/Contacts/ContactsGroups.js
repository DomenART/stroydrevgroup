import React, { Fragment } from 'react'
import styles from './ContactsGroups.module.sass'
import ContactsRow from './ContactsRow'
import SvgIcon from '../UI/SvgIcon'

const ContactsGroups = ({ groups }) =>
    <div className={styles.container}>
        {groups.map((group, index) => (
            <div className={styles.group} key={index}>
                {group.title && (
                    <h2
                        className={styles.title}
                        dangerouslySetInnerHTML={{__html:group.title}}
                    />
                )}
                <div className="uk-grid uk-grid-medium uk-flex-middle" data-uk-grid>
                    <div className="uk-width-1-2@s">
                        {group.contacts && group.contacts.map((row, index) => (
                            <ContactsRow {...row} key={index} />
                        ))}
                    </div>
                    <div className="uk-width-1-2@s">
                        {group.map && (
                            <div
                                className={styles.map}
                                dangerouslySetInnerHTML={{__html:group.map}}
                            />
                        )}
                    </div>
                </div>
            </div>
        ))}
    </div>

export default ContactsGroups