import React from 'react'
import {Link} from 'react-router'
import AddTicketButton from './AddTicketButton'
import AuthButton from './AuthButton'
import ViewListButton from './ViewListButton'

export default React.createClass({
  render() {
    return (
      <div className="header">
        <Link to="/"> <span className="logo"> Harvestr </span> </Link>
        <div className="auth">
          <AuthButton />
          <AddTicketButton />
          <ViewListButton />
        </div>
      </div>
    )
  }
})
