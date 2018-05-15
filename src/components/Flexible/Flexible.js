import React from 'react'
import TextWithVideo from './TextWithVideo'

const Flexible = ({ rows }) =>
    <section>
        {rows.map((row, index) => {
            switch (row.internal.type) {
                case 'WordPressAcf_text_with_video':
                    return <TextWithVideo {...row} key={index} />
            }
        })}
    </section>

export default Flexible