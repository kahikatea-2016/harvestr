import React from 'react'
import {Link} from 'react-router'

import api from '../api'
import Header from './Header'
import Banner from './Banner'
import ListItem from './ListItem'

let pickUpWeight = 0
let dropOffWeight = 0

export default React.createClass({
  getInitialState () {
    return {
      tickets: [],
      driverOrigin: [],
      driverDestination: [],
      driverWaypoints: []
    }
  },

  componentDidMount () {
    api.getTickets(this.renderResults)
  },

  renderResults (err, allTickets) {
    let allRoutes = []

    for (var i = 0; i < allTickets.length; i++) {
      if(!allTickets[i].isComplete) {
        allRoutes.push(allTickets[i].address)
      }
    }
    let origin = allRoutes.shift()
    let destination = allRoutes.pop()
    let waypoints = allRoutes.join('|')

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
      tickets: allTickets,
      driverOrigin: origin,
      driverDestination: destination,
      driverWaypoints: waypoints
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

          <iframe
            className="map-embed"
            width="600"
            height="450"
            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDrUjwUTFH8bIxN6Aj93o1rL9Gw25vASpk&origin=${this.state.driverOrigin}&destination=${this.state.driverDestination}&waypoints=${this.state.driverWaypoints}`}>
          </iframe>

        </div>
      </div>
    )
  }
})
