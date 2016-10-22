import React from 'react'

import api from '../api'

import Header from './Header'
import Banner from './Banner'

export default React.createClass({
  getInitialState () {
    return {
      ticket: []
    }
  },

  componentDidMount () {
    const ticketId = this.props.params.ticket
    api.getDonorTicket(ticketId, this.renderResults)
  },

  renderResults (err, singleTicket) {
    console.log(singleTicket[0])
    this.setState({
      ticket: singleTicket[0]
    })
  },

  render () {
    const ticket = this.state.ticket
    return (
      <div>
        <Header />
        <Banner />
      <div className="ticketWrapperSingle">
          <div className="orgInfo">
            <h2> {ticket.name} </h2>
            <h4> {ticket.address} </h4>
          </div>
          <span className="fade_line"></span>
          <div className="contact">
            <h2> {ticket.contact} </h2>
            <h2> {ticket.phone} </h2>
          </div>
          <span className="fade_line"></span>
          <div className="inventory">
            <h2> Expected Weight: {ticket.expected}kg </h2>
          </div>
          <span className="fade_line"></span>
          <div className="notes">
            <h2> Notes </h2>
            <ul>
              <li> {ticket.notes} </li>
            </ul>
          </div>
          <span className="fade_line"></span>
          <div className="comments">
            <label> Comments </label>
            <br/>
            <ul>
              <li> TicketComment </li>
            </ul>
            <br/>
            <textarea rows="4" cols="40" className="textInput" placeholder="Write a Comment"></textarea>
            <br/>
            <input className="button" type="submit" value="Post"/>
          </div>
        </div>
    </div>
    )
  }
})
