import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import createStore from './src/state/createStore'
import WebFonts from './src/components/App/WebFonts'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
    const store = createStore()

    const ConnectedBody = () => (
        <Provider store={store}>{bodyComponent}</Provider>
    )
    replaceBodyHTMLString(renderToString(<ConnectedBody />))
}

exports.onRenderBody = ({ setPostBodyComponents, setHtmlAttributes }) => {
    const postBodyComponents = [
        <script src="https://yastatic.net/share2/share.js" key="share2" />,
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" key="webfontapi" />,
        <WebFonts key="webfontconfig" />
    ]
    setPostBodyComponents(postBodyComponents)
}