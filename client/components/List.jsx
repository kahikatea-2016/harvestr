import React from 'react'

import ListItem from './ListItem'

export default React.createClass({
  render() {
    return (
      <div className="listWrapper">
        {this.props.tickets.map((tickets) => {
          return <ListItem
          key={tickets.ticketId}
          ticketId={tickets.ticketId}
          donorId={tickets.donorId}
          donorName={tickets.donorName}
          recipientId={tickets.recipientId}
          recipientName={tickets.recipientName}
          address={tickets.address}
          weight={tickets.expectedKg}
          isComplete={tickets.isComplete}/>
        })}
      </div>
    )
  }
})
