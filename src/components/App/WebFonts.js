import React from 'react'

const WebFonts = () => {
    const config = {
        google: {
            families: ["Open+Sans:300,400,400i,600,700,800&subset=cyrillic"]
        }
    }
    const snippet = `if (WebFont) WebFont.load(${JSON.stringify(config)});`;

    return (
        <script dangerouslySetInnerHTML={{ __html: snippet }} />
    )
}

export default WebFonts