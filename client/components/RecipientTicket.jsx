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
      ticket: [],
      comments: [],
      actualKg: ''
    }
  },

  componentDidMount () {
    const ticketId = this.props.params.ticket
    api.getRecipientTicket(ticketId, this.renderTicketInfo)
    api.getTicketComments(ticketId, this.renderTicketComments)
  },

  renderTicketInfo (err, singleTicket) {
    this.setState({
      ticket: singleTicket[0],
      actualKg: singleTicket[0].actual
    })
  },

  renderTicketComments (err, ticketComments) {
    this.setState({
      comments: ticketComments
    })
  },

  updateTicket () {
    let addActualKg = {
      ticketId: ticket.id,
      actualKg: actualKg.value
    }
    api.updateTicket(addActualKg)

    if(comment.value === '') {
      console.log('No comment added')
    } else {
      let addComment = {
        ticketId: ticket.id,
        comment: comment.value
      }
      api.updateComment(addComment)
    }
  },

  onChange (e) {
    this.setState( {actualKg: parseInt(e.target.value, 10) })
  },

  render () {
    ticket = this.state.ticket
    return (
      <div>
        <Header />
      <div className="ticketWrapperSingle recipColor">
          <div className="orgInfo">
            <h2> {ticket.name} </h2>
            <h4> {ticket.address} </h4>
          </div>
          <span className="fade_line_recip"></span>
          <div className="contact">
            <h2> {ticket.contact} </h2>
            <h2> {ticket.phone} </h2>
          </div>
          <span className="fade_line_recip"></span>
          <div className="inventory">
            <h2> Expected: {ticket.expected}kg </h2>
            <h2>Actual:</h2>
            <input type="number"
              placeholder="Actual kg"
              value={this.state.actualKg || 0}
              onChange={(e) => this.onChange(e)}
              ref={function (input) {
                actualKg = input
              }} />
            <h2>kg</h2>
          </div>
          <span className="fade_line_recip"></span>
          <div className="notes">
            <h2> Notes </h2>
            <ul>
              <li> {ticket.notes} </li>
            </ul>
          </div>
          <span className="fade_line_recip"></span>
          <div className="comments">
            <label> Comments </label>
            <br/>
            <ul>
              {this.state.comments.map((comments, i) => {
                return (
                  <li key={i}>{comments.comments}</li>
                )
              })}
            </ul>
            <br/>
            <textarea rows="4" cols="40" className="textInput" placeholder="Write a Comment"
              ref={function (input) {
                comment = input
              }}></textarea>
            <br/>
            <Link to='/list'><button className="button buttonRecip">back</button></Link>
            <Link to='/list'>
            <input className="button buttonRecip" type="submit" value="Complete" onClick={() => this.updateTicket()}/>
            </Link>
          </div>
        </div>
    </div>
    )
  }
})
