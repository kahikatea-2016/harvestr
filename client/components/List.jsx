import React form 'react'

export default React.createClass({
  render() {
    return (
      <div className="listWrapper">
        {this.props.tickets.map(ticket => {
          return(
            <div className="ticketWrapper">
              <div className="weight"> {TicketWeight} </div>
              <div className="orgInfo">
                <h2> {OrganisationName} </h2>
                <h4> {Address} </h4>
              </div>
              <div class="nav-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
})
