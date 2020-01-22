import React from 'react'


const Search = (props) => {
  return (
    <div className="sixteen wide column ui fluid category search">
      <div className="fluid ui icon input">
        <input type="text" placeholder="Search transactions..." onChange={e => props.search(e.target.value)}></input>
        <i className="search icon"></i>
      </div>
    </div>
  )
}

export default Search
