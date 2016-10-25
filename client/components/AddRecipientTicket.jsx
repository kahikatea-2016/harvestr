import React from 'react'
import {Link} from 'react-router'

import Header from './Header'
import api from '../api'

let ticket = null
let selectRecipient = null
let expectedKg = null
let detailId = null

export default React.createClass({
    getInitialState() {
      return {
        recipients: []
      }
    },

    handleChange(event) {
      this.setState({
        value: event.target.value,
        id: event.target.id
      })
    },

    componentDidMount() {
      api.getRecipients(this.renderResults)
    },

    renderResults(err, recipients) {
      this.setState({recipients: recipients})
    },

    addRecipientTicket () {
      let newTicket = {
        recipientId: selectRecipient.value,
        expectedKg: expectedKg.value
      }
      api.addTicket(newTicket)
    },

    render() {
      return (
        <div>
          <Header />
          <div className="recipientForm">
            <h2> Create a Recipient Ticket </h2><br/><br/>
            <select value={this.state.value} id={this.state.id} onChange={this.handleChange} ref={function (input) {
                selectRecipient = input
              }}>
              <option value="0"> Select Recipient Name </option>
              {this.state.recipients.map((recipient) => {
                return (
                  <option key={recipient.id} id={recipient.id} value={`${recipient.id}|${recipient.recipientDetailsId}`}>
                    {recipient.recipientName}
                  </option>
                )
              })}
            </select>
            <br/><br/>
            <label htmlFor="weight"> Expected Weight: </label>
            <br/>
            <input name="weight" type="number" min="1" max="999" placeholder="Kilograms" ref={function (input) {
              expectedKg = input
            }} />
            <br/><br/>
            <Link to='/list'>
            <input className="button" type="submit" value="Submit" onClick={() => this.addRecipientTicket()}/>
            </Link>
          </div>
        </div>
      )
    }
  })
