import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="listButton">
        <a href="/auth/logout">Sign Out</a>
      </div>
    )
  }
})
