import React from 'react'
import SvgIcon from '../UI/SvgIcon'
import styles from './ContactsRow.module.sass'

const ContactsRow = ({ name, comment, icon, text, add }) =>
    <div className={styles.row}>
        <SvgIcon name={icon} className={styles.icon} />
        <div className={styles.head}>
            <div
                className={styles.name}
                dangerouslySetInnerHTML={{
                    __html: name
                }}
            />
            {comment && (
                <div
                    className={styles.comment}
                    dangerouslySetInnerHTML={{
                        __html: comment
                    }}
                />
            )}
            {add && (
                <div
                    className={styles.add}
                    dangerouslySetInnerHTML={{
                        __html: add
                    }}
                />
            )}
        </div>
        <div
            className={styles.text}
            dangerouslySetInnerHTML={{
                __html: text
            }}
        />
    </div>

export default ContactsRow
