import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="listButton">
        <Link to='/'>Sign Out</Link>
      </div>
    )
  }
})
