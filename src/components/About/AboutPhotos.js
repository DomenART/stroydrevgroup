import React, { Component } from 'react'
import { connect } from 'react-redux'
import AboutBox from './AboutBox'
import styles from './AboutPhotos.module.sass'
import SvgIcon from '../UI/SvgIcon';

class AboutPhotos extends Component {
    render() {
        const { isSmall } = this.props.resolution

        return (
            <AboutBox
                rect={isSmall}
                parent={{
                    to: "/katalog",
                    title: "фото"
                }}
                back={(
                    <div className={styles.back}>
                        <div className={styles.backSubTitle}>
                            Выполненные проекты
                        </div>
                        <div className={styles.backTitle}>
                            <span>Фотографии</span>
                            построенных домов
                        </div>
                        <span className={styles.backMore}>
                            Смотреть все
                            <span />
                        </span>
                    </div>
                )}
                front={(
                    <div className={styles.front} />
                )}
            />
        )
    }
}

export default connect(
    state => ({
        resolution: state.resolution
    })
)(AboutPhotos)