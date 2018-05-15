import React from 'react'

export default ({ name, ...settings }) =>
    <svg {...settings}>
        <use
            href={`#${name}`}
        />
    </svg>