import React from 'react'
import {Link} from 'react-router'


import api from '../api'

import Header from './Header'
import Banner from './Banner'

let ticket = null
let actualKg = null
let comment = null

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
    this.setState({
      ticket: singleTicket[0]
    })
  },

  getTicketInfo () {
    let addActualKg = {
      ticketId: ticket.id,
      actualKg: actualKg.value
    }
    api.updateTicket(addActualKg)

    let addComment = {
      ticketId: ticket.id,
      comment: comment.value
    }
    api.updateComment(addComment)
  },



  render () {
    ticket = this.state.ticket
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
            <h2> Expected: {ticket.expected}kg </h2>
            <input type="number" placeholder="Actual kg"
              ref={function (input) {
                actualKg = input
              }} />
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
              <li> {ticket.comments} </li>
            </ul>
            <br/>
            <textarea rows="4" cols="40" className="textInput" placeholder="Write a Comment"
              ref={function (input) {
                comment = input
              }}></textarea>
            <br/>
            <Link to='/list'>
            <input className="button" type="submit" value="Complete" onClick={() => this.getTicketInfo()}/>
            </Link>
          </div>
        </div>
    </div>
    )
  }
})
