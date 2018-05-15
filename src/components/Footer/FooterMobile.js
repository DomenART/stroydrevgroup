import React, { Component } from 'react'
import Link from 'gatsby-link'
import SocialGroups from '../Sidebar/SocialGroups'
import styles from './FooterMobile.module.sass'

const FooterMobile = ({ copyright }) => {
    return (
        <section className={styles.container}>
            <SocialGroups className={styles.groups} />
            <div
                className={styles.copyright}
                dangerouslySetInnerHTML={{__html: copyright}}
            />
        </section>
    )
}

export default FooterMobile
