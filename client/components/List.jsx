import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="listWrapper">
        {this.props.tickets.map(ticket => {
          return(
            <Link to={`/donortickets/${donorTicket.name}`}>
              <div className="ticketWrapper">
                <div className="weight"> TicketWeight </div>
                <div className="orgInfo">
                  <h2> OrganisationName </h2>
                  <h4> Address </h4>
                </div>
                <div class="nav-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </Link>
          )
        })}
        List View
      </div>
    )
  }
})
