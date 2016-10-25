import React from 'react'
import {Link} from 'react-router'

import api from '../api'
import Header from './Header'
import Banner from './Banner'
import ListItem from './ListItem'
import Notif from './Notif'

let pickUpWeight = 0
let dropOffWeight = 0

export default React.createClass({
  getInitialState () {
    return {
      tickets: []
    }
  },

  componentDidMount () {
    api.getTickets(this.renderResults)
  },

  renderResults (err, allTickets) {
    pickUpWeight = 0
    dropOffWeight = 0
    for (var i = 0; i < allTickets.length; i++) {
      if(allTickets[i].donorId) {
        if(allTickets[i].actualKg) {
          pickUpWeight += (allTickets[i].actualKg)
        }
      }
    }
    for (var i = 0; i < allTickets.length; i++) {
      if(allTickets[i].recipientId) {
        if(allTickets[i].actualKg) {
          dropOffWeight += (allTickets[i].actualKg)
        }
      }
    }

    this.setState({
      tickets: allTickets
    })
  },

  render() {
    return (
      <div>
        <Header />
        <div className="listWrapper">

          <h2>Today's Tickets</h2>

          <h3>Total picked up: {pickUpWeight}kg</h3>
          <h3>Total dropped off: {dropOffWeight}kg</h3>
          {this.state.tickets.map((tickets) => {
            return <ListItem
            key={tickets.ticketId}
            ticketId={tickets.ticketId}
            donorId={tickets.donorId}
            donorName={tickets.donorName}
            recipientId={tickets.recipientId}
            recipientName={tickets.recipientName}
            address={tickets.address}
            expectedKg={tickets.expectedKg}
            actualKg={tickets.actualKg}
            isComplete={tickets.isComplete}/>
          })}
        </div>
        <Notif content={{ lastComment: 'hey you forgot the hummus'}} />
      </div>

    )
  }
})
