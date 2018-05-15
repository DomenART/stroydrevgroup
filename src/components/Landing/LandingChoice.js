import React from 'react'
import styles from './LandingChoice.module.sass'

const LandingChoice = ({ title, text }) =>
    <section className={styles.container}>
        <div className="uk-grid uk-flex-middle">
            <div className={`${styles.left} uk-width-1-2`}>
                <div
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <button
                    className={styles.order}
                    data-uk-toggle="target: #Feedback"
                    dangerouslySetInnerHTML={{__html: "Заказать консультацию"}}
                />
            </div>
            <div className="uk-width-1-2">
                <div
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </div>
    </section>

export default LandingChoice