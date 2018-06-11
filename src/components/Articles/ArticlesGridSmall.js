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
                case 1: case 4: case 7: case 10: return (
                    <div className="uk-width-1-2" key={row.id}>
                        <ArticlesSmall {...row} color={'gray'} />
                    </div>
                )
                case 2: case 8: case 13: return (
                    <div className="uk-width-1-2" key={row.id}>
                        <ArticlesSmall {...row} color={'green'} />
                    </div>
                )
                case 3: case 9: case 12: return (
                    <div className="uk-width-1-2" key={row.id}>
                        <ArticlesSmall {...row} color={'yellow'} />
                    </div>
                )
                case 5: case 6: case 11: case 14: return (
                    <div className="uk-width-1-1" key={row.id}>
                        <ArticlesLong {...row} />
                    </div>
                )
            }
        })}
    </div>