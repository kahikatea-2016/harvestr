import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
        <div className="header">
          <span className="logo"> Harvestr </span>
          <div className="auth">
            <Link to='/list'> Login </Link>
            <Link to='/'> Home </Link>
          </div>
        </div>
    )
  }
})
