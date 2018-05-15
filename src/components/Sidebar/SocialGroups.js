import React from 'react'
import styles from './SocialGroups.module.sass'
import SvgIcon from '../UI/SvgIcon'

const Link = ({ url, name }) =>
    <a href={url} className={`${styles.link} ${styles[name]}`}>
        <SvgIcon name={name} />
    </a>

export default ({ className }) =>
    <div className={className}>
        <Link
            url="#"
            name="instagram"
        />
        <Link
            url="#"
            name="vk"
        />
        <Link
            url="#"
            name="facebook"
        />
        <Link
            url="#"
            name="youtube"
        />
        <Link
            url="#"
            name="twitter"
        />
    </div>