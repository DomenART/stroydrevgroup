import React, { Component } from 'react'
import styles from './ProjectInfo.module.sass'

class ProjectInfo extends Component {
    constructor(props) {
        super(props)

        this.tabs = React.createRef()
    }

    componentDidMount() {
        UIkit.tab(this.tabs.current, {})
    }

    render() {
        const { additional, equipments } = this.props

        return (
            <div className={styles.container}>
                <ul className={styles.tabs} ref={this.tabs}>
                    {equipments && <li>Комплектация</li>}
                    {additional && <li>Дополнительные услуги</li>}
                </ul>

                <ul className={`${styles.switcher} uk-switcher`}>
                    {equipments && (
                        <li className={styles.equipments}>
                            {Object.keys(equipments).map(key => (
                                <div className={styles.equipment} key={key}>
                                    <div
                                        className={styles.equipmentTitle}
                                        dangerouslySetInnerHTML={{__html:equipments[key].name}}
                                    />
                                    <ul className={styles.equipmentList}>
                                        {equipments[key].description.split("\r\n").map((row, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{__html:row}} />
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </li>
                    )}
                    {additional && (
                        <li>
                            <div
                                className={styles.additional}
                                dangerouslySetInnerHTML={{__html:additional}}
                            />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ProjectInfo