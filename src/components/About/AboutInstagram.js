import React from 'react'
import styles from './AboutInstagram.module.sass'
import SvgIcon from '../UI/SvgIcon';
import Link from '../UI/Link';

const AboutInstagram = ({ title, text }) =>
    <div className={styles.box}>
        <div className={styles.headline}>
            <div className={styles.icon}>
                <SvgIcon name="instagram" />
            </div>
            <div className={styles.title}>
                @stroydrevgroup
            </div>
            <Link
                to="https://www.instagram.com/domenart_webstudio/"
                className={styles.subscribe}
            >
                подписаться
            </Link>
        </div>
        <div className={styles.body}>
            @stroydrevgroup
        </div>
    </div>

export default AboutInstagram