import React, { Component } from 'react'
import config from '../../config.json'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
        this.submitForm = this.submitForm.bind(this)
        this.form = React.createRef()
    }

    submitForm(e) {
        e.preventDefault()

        fetch(config.API_URL + this.props.action, {
            method: 'POST',
            body: new FormData(this.form.current)
        })
        .then(response => response.json())
        .then(response => {
            if (response.status == 'validation_failed') {
                UIkit.notification({
                    message: response.message,
                    status: 'danger'
                })
            }

            if (response.status == 'mail_sent') {
                this.form.current.reset()

                if (this.props.successMessage) {
                    this.setState({
                        success: true
                    }, () => {
                        setTimeout(() => {
                            if (this.props.successCallback) {
                                this.props.successCallback.call()
                            }
                            this.setState({
                                success: false
                            })
                        }, 5000)
                    })
                } else {
                    UIkit.notification({
                        message: response.message,
                        status: 'success'
                    })
                }
            }
        })
    }

    render() {
        const { children, action, className, method, encType, successMessage } = this.props

        return (
            <form
                ref={this.form}
                action={action}
                className={className}
                method={method}
                encType={encType}
                onSubmit={this.submitForm}
            >
                {this.state.success && successMessage ? successMessage : children}
            </form>
        )
    }
}

export default Form