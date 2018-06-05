import React from 'react'
import styles from './AboutInstagram.module.sass'
import SvgIcon from '../UI/SvgIcon';
import Link from '../UI/Link';

const AboutInstagram = ({ title, text }) =>
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.headline}>
                <SvgIcon name="instagram" className={styles.icon} />
                <div className={styles.title}>
                    @stroydrevgroup
                </div>
                <Link
                    to="https://www.instagram.com/domenart_webstudio/"
                    className={`${styles.subscribe} button-jitney`}
                    target="_blank"
                >
                    <span>подписаться</span>
                    <SvgIcon name="subscribe" />
                </Link>
            </div>
            <div className={styles.body}>
                <iframe
                    src='https://stroydrevgroup.ru/wp-content/themes/app/vendor/inwidget/index.php?toolbar=false&view=1'
                    scrolling='no'
                    frameborder='no'
                    className={styles.iframe}
                />
            </div>
        </div>
    </div>

export default AboutInstagram