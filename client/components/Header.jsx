import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="header">
        <span className="logo"> Harvestr </span>

          <div className="auth">
          <Link to='/list'> <div className="g-signin2" data-onsuccess="onSignIn"> </div> </Link>
            <Link to='/'> Home </Link>

          <div className="dropdownAdd">
            Add a Ticket
            <div className="dropdownAddContent">
              <Link to='/addDonorTicket'> Add a Donor Ticket </Link>
              <Link to='/addRecipientTicket'> Add a Recipient Ticket </Link>
            </div>
          </div>

        </div>

      </div>
      // </div>
    )
  }
})
