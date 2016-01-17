/* eslint-env browser */
import React from 'react'

// TODO: Replace for proper store get action.
const getCurrentFilter = function () { return 'ALL' }


class FilterList extends React.Component {
  constructor () {
    super()
    this.state = { activeFilter: getCurrentFilter() }
  }

  handleClick (e) {
    // TODO: replace for action call.
    this.setState({ activeFilter: e.target.innerText })
  }

  render () {
    let activeFilter = this.state.activeFilter
    let filterList   = [
      'ALL', '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z'
    ]

    let filterNodes = filterList.map(
      (filter,  idx) => {
        let activeClass = (filter === activeFilter ? 'is-active' : '')

        return (
          <li key={idx} className='Series-filter'>
            <a href='#'
               className={`Series-link ${activeClass}`}
               onClick={this.handleClick.bind(this)}>
              {filter}
            </a>
          </li>
        )
      }
    )


    return (
      <ul className='Series-filters'>
        {filterNodes}
      </ul>
    )
  }
}


export default FilterList
