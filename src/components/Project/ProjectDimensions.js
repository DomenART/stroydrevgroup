import React from 'react'
import styles from './ProjectDimensions.module.sass'

const ProjectDimensions = ({ area, length, width }) =>
    <div className={styles.container}>
        <div className={styles.row}>
            <div className="uk-grid uk-grid-collapse">
                <div className="uk-width-3-4@s uk-width-1-2@l">
                    <div className={styles.label}>Общая площадь с учетом террас</div>
                </div>
                <div className="uk-width-1-4@s uk-width-1-2@l">
                    <div className={styles.value}>{area} м<sup>2</sup></div>
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className="uk-grid uk-grid-collapse">
                <div className="uk-width-3-4@s uk-width-1-2@l">
                    <div className={styles.label}>Габариты застройки</div>
                </div>
                <div className="uk-width-1-4@s uk-width-1-2@l">
                    <div className={styles.value}>{width}*{length} м</div>
                </div>
            </div>
        </div>
    </div>

export default ProjectDimensions