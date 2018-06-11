import React from 'react'
import ArticlesLarge from './ArticlesLarge'
import ArticlesLong from './ArticlesLong'
import ArticlesLongBox from './ArticlesLongBox'
import ArticlesSmall from './ArticlesSmall'
import ArticlesSmallBox from './ArticlesSmallBox'
import ArticlesTall from './ArticlesTall'

export default ({ rows }) =>
    <div className="uk-grid uk-grid-small" data-uk-grid>
        {rows.map((row, index) => {
            switch (index % 14 + 1) {
                case 1: return (
                    <div className="uk-width-3-5" key={row.id}>
                        <ArticlesLarge {...row} />
                    </div>
                )
                case 2: return (
                    <div className="uk-width-2-5" key={row.id}>
                        <div className="uk-grid uk-grid-small uk-height-1-1" data-uk-grid>
                            <div className="uk-width-1-1">
                                <ArticlesSmall {...row} color={'yellow'} />
                            </div>
                            {rows[index+1] && (
                                <div className="uk-width-1-1">
                                    <ArticlesSmall {...rows[index+1]} color={'green'} />
                                </div>
                            )}
                        </div>
                    </div>
                )
                case 4: return (
                    <div className="uk-width-2-5" key={row.id}>
                        <ArticlesSmall {...row} color={'yellow'} />
                    </div>
                )
                case 5: return (
                    <div className="uk-width-3-5" key={row.id}>
                        <ArticlesLong {...row} />
                    </div>
                )
                case 6: return (
                    <div className="uk-width-3-5" key={row.id}>
                        <ArticlesLong {...row} />
                    </div>
                )
                case 7: return (
                    <div className="uk-width-2-5" key={row.id}>
                        <ArticlesSmall {...row} color={'gray'} />
                    </div>
                )
                case 8: return (
                    <div className="uk-width-2-5" key={row.id}>
                        <ArticlesSmall {...row} color={'green'} />
                    </div>
                )
                case 9: return (
                    <div className="uk-width-3-5" key={row.id}>
                        <ArticlesLong {...row} />
                    </div>
                )
                case 10: return (
                    <div className="uk-width-3-5" key={row.id}>
                        <ArticlesLong {...row} />
                    </div>
                )
                case 11: return (
                    <div className="uk-width-2-5" key={row.id}>
                        <ArticlesSmall {...row} color={'gray'} />
                    </div>
                )
                case 12: return (
                    <div className="uk-width-2-5" key={row.id}>
                        <div className="uk-grid uk-grid-small uk-height-1-1" data-uk-grid>
                            <div className="uk-width-1-1">
                                <ArticlesSmall {...row} color={'yellow'} />
                            </div>
                            {rows[index+1] && (
                                <div className="uk-width-1-1">
                                    <ArticlesSmall {...rows[index+1]} color={'green'} />
                                </div>
                            )}
                        </div>
                    </div>
                )
                case 14: return (
                    <div className="uk-width-3-5" key={row.id}>
                        <ArticlesLarge {...row} />
                    </div>
                )
            }
        })}
    </div>