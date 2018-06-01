import React, { Component } from 'react'
import { connect } from 'react-redux'
import SvgSprite from '../UI/SvgSprite'
import ScrollUp from '../UI/ScrollUp'
import HeaderMobile from '../Header/HeaderMobile.js'
import ToolbarMobile from '../Header/ToolbarMobile.js'
import Sidebar from '../Sidebar/Sidebar'
import Offcanvas from '../Offcanvas/Offcanvas'
import Footer from '../Footer/Footer'
import Feedback from '../Forms/Feedback'
import Calculation from '../Forms/Calculation'
import Consultation from '../Forms/Consultation'
import CalculationIndividual from '../Forms/CalculationIndividual'

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
                    {children}
                    <Footer />
                </Offcanvas>
                <Feedback />
                <Consultation />
                <Calculation />
                <CalculationIndividual />
                <SvgSprite />
                <ScrollUp />
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
