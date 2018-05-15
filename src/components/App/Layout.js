import React, { Component } from 'react'
import { connect } from 'react-redux'
import SvgSprite from '../UI/SvgSprite'
import Header from '../Header/Header.js'
import HeaderMobile from '../Header/HeaderMobile.js'
import ToolbarMobile from '../Header/ToolbarMobile.js'
import Sidebar from '../Sidebar/Sidebar'
import Offcanvas from '../Offcanvas/Offcanvas'
import Footer from '../Footer/Footer'
import Calculation from '../Forms/Calculation'
import Feedback from '../Forms/Feedback'

class Layout extends Component {
    render() {
        const { isDrawerOpen, children } = this.props
        const { isExtraSmall, isMediumMax } = this.props.resolution

        return (
            <div className='wrapper uk-offcanvas-content'>
                <Sidebar />
                <HeaderMobile />
                <ToolbarMobile />
                <Offcanvas>
                    <Header />
                    {children}
                    <Footer />
                </Offcanvas>
                <Calculation />
                <Feedback />
                <SvgSprite />
            </div>
        )
    }
}

export default connect(
    state => ({
        isDrawerOpen: state.app.isDrawerOpen,
        resolution: state.resolution
    })
)(Layout)
