import React from 'react'
import {Link} from 'react-router'
import AddTicketButton from './AddTicketButton'
import AuthButton from './AuthButton'
import ViewListButton from './ViewListButton'
import SignOutButton from './SignOutButton'

export default React.createClass({
  render() {
    return (
<<<<<<< HEAD
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
=======
      <div className="header">
        <Link to="/"> <span className="logo"> Harvestr </span> </Link>
        <div className="auth">
          <SignOutButton />
          <AddTicketButton />
          <ViewListButton />
          <AuthButton />
      </div>
    </div>
>>>>>>> 4f552b328e7a6d1a5866395deea986936d8536c0
    )
  }
})
