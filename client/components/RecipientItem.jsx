import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <Link to={`/recipient/${this.props.recipientId}`}>
        <div className="ticketWrapper dropOff">
          <div className="orgInfo">
            <h2> {this.props.recipientName} </h2>
          </div>
        </div>
      </Link>
    )
  }
})
