import React from 'react'

import ListItem from './ListItem'

export default React.createClass({
  render() {
    return (
      <div className="listWrapper">
        {this.props.tickets.map((tickets, i) => {
          return <ListItem
          key={i}
          donorId={tickets.donorId}
          recipientName={tickets.recipientId}
          address={tickets.address}
          donorName={tickets.donorName}
          recipientName={tickets.recipientName}
          recipientId={tickets.recipientId}
          weight={tickets.expectedKg} />
        })}
      </div>
    )
  }
})
