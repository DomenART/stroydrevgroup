import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config.json'
import SvgIcon from '../UI/SvgIcon'
import styles from './PageSubscription.module.sass'

class PageSubscription extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            nonce: ''
        }
        this.form = React.createRef()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.post(`${config.API_URL}app/v1/create_nonce`, {
            action: 'es-subscribe'
        })
        .then(response => {
            this.setState({
                nonce: response.data
            })
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()

        if (!this.state.nonce) {
            UIkit.notification({
                message: 'Не удалось отправить форму',
                status: 'warning'
            })
            return false
        }

        if (!this.state.value) {
            UIkit.notification({
                message: 'Не введен e-mail адрес',
                status: 'warning'
            })
            return false
        }

        axios.post(config.AJAX_URL, new FormData(this.form.current))
        .then(response => {
            const notification = {
                message: '',
                status: ''
            }
            if (response.data.error) {
                switch (response.data.error) {
                    case 'invalid-email':
                        notification.message = 'Неверный e-mail адрес'
                        break
                    default:
                        notification.message = 'Неизвестная ошибка'
                }
                notification.status = 'danger'
            }
            if (response.data.success) {
                switch (response.data.success) {
                    case 'already-exist':
                        notification.message = 'Вы уже подписаны на рассылку'
                        break
                    case 'subscribed-pending-doubleoptin':
                        notification.message = 'На Ваш e-mail дарес отправлено письмо для подтверждения'
                        break
                    default:
                        notification.message = 'Кажется, все хорошо'
                }
                notification.status = 'success'
            }
            UIkit.notification(notification)
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    Чтобы получать полезные статьи от СтройДрев, подпишитесь на рассылку:
                </div>
                <form
                    className={styles.form}
                    ref={this.form}
                    onSubmit={this.handleSubmit}
                >
                    <input type="hidden" name="action" value="es_add_subscriber" />
                    <input type="hidden" name="es" value="subscribe" />
                    <input type="hidden" name="esfpx_es-subscribe" value={this.state.nonce} />
                    <input type="hidden" name="esfpx_es_txt_name" value="Anonymous" />
                    <input type="hidden" name="esfpx_es_txt_group" value="Public" />

                    <div className={styles.input}>
                        <input
                            type="text"
                            name="esfpx_es_txt_email"
                            placeholder="Введите ваш e-mail"
                            value={this.state.value}
                            onChange={this.handleChange}
                            required
                        />
                        <SvgIcon name="envelope" />
                    </div>
                    <button className={styles.submit}>
                        Подписаться
                    </button>
                </form>
            </div>
        )
    }
}

export default PageSubscription