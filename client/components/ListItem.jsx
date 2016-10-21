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

    let id = null
    let ticketStyle = null
    if(this.props.donorId) {
      id = this.props.donorId
      ticketStyle = 'pickUp'
    } else {
      id = this.props.recipientId
      ticketStyle = 'dropOff'
    }

    return (
      <Link className="link" to={`/v1/tickets/${id}`}>
        <div className={`ticketWrapper ${ticketStyle}`}>
          <div className="weight"> {this.props.weight} </div>
          <div className="orgInfo">
            <h4> {name} </h4>
            <h2> {this.props.address} </h2>
          </div>
        </div>
      </Link>
    )
  }
})
