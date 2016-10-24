import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="dropdownAdd">
        Add a Ticket
        <div className="dropdownAddContent">
          <Link to='/addDonorTicket'> Add a Donor Ticket </Link>
          <Link to='/addRecipientTicket'> Add a Recipient Ticket </Link>
        </div>
      </div>
    )
  }
})
