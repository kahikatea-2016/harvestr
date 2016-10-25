import React from 'react'
import {Link} from 'react-router'

import DonorTicket from './DonorTicket'
import RecipientTicket from './RecipientTicket'

export default React.createClass({
  render() {
    let name = null
    let param = null
    let job = null
    if(this.props.donorName) {
      name = this.props.donorName
      param = 'donor'
      job = 'pickup'
    } else {
      name = this.props.recipientName
      param = 'recipient'
      job = 'drop off'
    }

    let ticketStyle = null
    let status = null
    let weight = null
    if(this.props.isComplete) {
      ticketStyle = 'complete'
      status = 'complete actual'
      weight = this.props.actualKg
    } else if(this.props.donorId) {
      ticketStyle = 'pickUp'
      status = 'expected'
      weight = this.props.expectedKg
    } else {
      ticketStyle = 'dropOff'
      status = 'expected'
      weight = this.props.expectedKg
    }

    return (
      <Link className="link" to={`/ticket/${param}/${this.props.ticketId}`}>
        <div className={`ticketWrapper ${ticketStyle}`}>
          {job}<br/>{status}
          <div className="weight">{weight}kg </div>
          <div className="orgInfo">
            <h4> {name} </h4>
            <h2> {this.props.address} </h2>
          </div>
        </div>
      </Link>
    )
  }
})
