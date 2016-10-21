import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    let name = null
    if(this.props.donorName) {
      name = this.props.donorName
    } else {
      name = this.props.recipientName
    }

    let ticketStyle = null
    if(this.props.donorId) {
      ticketStyle = 'pickUp'
    } else {
      ticketStyle = 'dropOff'
    }

    return (
      <Link className="link" to={`/v1/tickets/${this.props.ticketId}`}>
        <div className={`ticketWrapper ${ticketStyle}`}>
          <div className="weight"> {this.props.weight}kg </div>
          <div className="orgInfo">
            <h4> {name} </h4>
            <h2> {this.props.address} </h2>
          </div>
        </div>
      </Link>
    )
  }
})
