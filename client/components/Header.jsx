import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
        <div className="header">
          <span className="logo"> Harvestr </span>
          <div className="auth">
            <Link className="navButton" to='/list'> Login </Link>
            <Link className="navButton" to='/'> Home </Link>
            <div className="dropdownAdd navButton">
              Add a Ticket
              <div className="dropdownAddContent">
                <Link to='/addDonorTicket'><p> Add a Donor Ticket </p></Link>
                <Link to='/addRecipientTicket'><p> Add a Recipient Ticket </p></Link>
              </div>
            </div>
            <div className="dropdownAdd navButton">
              Add a Profile
              <div className="dropdownAddContent">
                <Link to='/createDonor'><p> Add a New Donor </p></Link>

                <Link to='/donorsList'><p>Donor's List</p></Link>

                <Link to='/createRecipient'><p> Add a New Recipient </p></Link>

              </div>
            </div>
          </div>
        </div>
    )
  }
})
