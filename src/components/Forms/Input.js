import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
        this.invalid = this.invalid.bind(this)
    }

    invalid(e) {
        e.target.classList.add(this.props.classNameInvalid)
        e.target.classList.remove(this.props.classNameValid)
    }

    change(e) {
        if (e.target.value == '') {
            e.target.classList.remove(this.props.classNameInvalid)
            e.target.classList.remove(this.props.classNameValid)
        } else if (e.target.validity.valid) {
            e.target.classList.remove(this.props.classNameInvalid)
            e.target.classList.add(this.props.classNameValid)
        } else {
            e.target.classList.add(this.props.classNameInvalid)
            e.target.classList.remove(this.props.classNameValid)
        }
    }

    render () {
        const { className, type, name, placeholder, required } = this.props

        return (
            <input
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                onInvalid={this.invalid}
                onChange={this.change}
            />
        )
    }
}

export default Input