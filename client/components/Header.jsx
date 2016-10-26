import React from 'react'
import {Link} from 'react-router'

import AddTicketButton from './AddTicketButton'
import AuthButton from './AuthButton'
import ViewListButton from './ViewListButton'
import SignOutButton from './SignOutButton'

export default React.createClass({
  render() {
    return (
        <div className="header">
          <Link to="/list"> <span className="logo"> Harvestr </span> </Link>
          <div className="auth">
            <Link className="navButton" to='/list'> List </Link>
            <div className="dropdownAdd navButton">
              Tickets
              <div className="dropdownAddContent">
                <Link to='/addDonorTicket'><p> Add a Donor Ticket </p></Link>
                <Link to='/addRecipientTicket'><p> Add a Recipient Ticket </p></Link>
              </div>
            </div>
            <div className="dropdownAdd navButton">
              Orgs
              <div className="dropdownAddContent">
                <Link to='/donorsList'><p>List of Donors</p></Link>
                <Link to='/recipientsList'><p>List of Recipients</p></Link>
              </div>
            </div>
            <a href="/auth/logout" className="authButton"> Logout </a>
          </div>
          <br/>
          <Link className="listBanner" to="/list"><p> See Full List </p></Link>
        </div>
    )
  }
})
