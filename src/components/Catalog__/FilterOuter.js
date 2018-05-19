import React, { Component } from 'react'
import FilterContext from './FilterContext'
import FilterSelect from './FilterSelect'

class FilterOuter extends Component {
    render() {
        return (
            <div>
                <FilterContext.Consumer>
                    {({ filters }) => (
                        <div>
                            {filters.length}
                        </div>
                    )}
                </FilterContext.Consumer>
                <FilterSelect name="type" />
            </div>
        )
    }
}

export default FilterOuter