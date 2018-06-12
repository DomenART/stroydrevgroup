import React, { Component } from 'react'
import { connect } from 'react-redux'
import YaShare from '../UI/YaShare'
import styles from './PageQuestions.module.sass'

class PageQuestions extends Component {
    render() {
        const { have_questions } = this.props

        return (
            <div className={styles.container}>
                <div className="uk-grid uk-grid-collapse">
                    <div
                        className={`${styles.text} uk-width-1-2@m`}
                        dangerouslySetInnerHTML={{
                            __html: have_questions
                        }}
                    />
                    <div className={`${styles.share} uk-width-1-2@m`}>
                        <div className={styles.title}>Поделиться:</div>
                        <YaShare size="extra-large" />
                        <img className={styles.logo} src={require('../../assets/wooden-logo.png')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        have_questions: state.app.options.have_questions
    })
)(PageQuestions)