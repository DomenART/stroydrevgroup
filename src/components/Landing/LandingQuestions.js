import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './LandingQuestions.module.sass'

@connect(
    state => ({
        have_questions: state.app.options.have_questions
    })
)
class LandingQuestions extends Component {
    render() {
        const { have_questions } = this.props

        return (
            <div className={styles.container}>
                <div className="uk-grid uk-grid-collapse">
                    <div
                        className={`${styles.text} uk-width-1-2@s`}
                        dangerouslySetInnerHTML={{
                            __html: have_questions
                        }}
                    />
                    <div className={`${styles.logo} uk-width-1-2@s`}>
                        <img src={require('../../assets/wooden-logo.png')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingQuestions