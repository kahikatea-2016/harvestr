import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <Link to={`/donor/${this.props.donorId}`}>
        <div className="ticketWrapper pickUp">
          <div className="orgInfo">
            <h2> {this.props.donorName} </h2>
          </div>
        </div>
      </Link>
    )
  }
})
