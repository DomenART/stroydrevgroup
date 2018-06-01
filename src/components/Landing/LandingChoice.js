import React from 'react'
import styles from './LandingChoice.module.sass'

const LandingChoice = ({ title, text }) => {
    let titleArray = title.split("\r\n")

    return (
        <section className={styles.container}>
            <div className="uk-grid uk-flex-middle">
                <div className={`${styles.left} uk-width-1-2`}>
                    <div
                        className={styles.title}
                        data-uk-scrollspy="offset-top: -300; target: > span; cls: uk-animation-slide-left-medium; delay: 300"
                    >
                        {titleArray ? titleArray.map((row, index) => (
                            <span
                                dangerouslySetInnerHTML={{ __html: row }}
                                key={index}
                            />
                        )) : title}
                    </div>
                    <button
                        className={styles.order}
                        data-uk-toggle="target: #Consultation"
                        dangerouslySetInnerHTML={{__html: "Заказать консультацию"}}
                        data-uk-scrollspy="offset-top: -300; cls: uk-animation-slide-top-medium"
                    />
                </div>
                <div className="uk-width-1-2">
                    <div
                        className={styles.text}
                        dangerouslySetInnerHTML={{ __html: text }}
                        data-uk-scrollspy="offset-top: -300; cls: uk-animation-scale-up"
                    />
                </div>
            </div>
        </section>
    )
}

export default LandingChoice