import React from 'react'
import {Link} from 'react-router'

import api from '../api'
import Header from './Header'
import RecipientItem from './RecipientItem'

export default React.createClass({
  getInitialState () {
    return {
      recipient: []
    }
  },

  componentDidMount () {
    api.getRecipients(this.renderResults)
  },

  renderResults (err, allRecipients) {
    this.setState ({
      recipients: allRecipients
    })
  },

  render () {
    return (
      <div>
        <Header />
        <div className="listWrapper">
          <h2> Here is a list of all the recipients </h2><br/><br/>
          <Link to='/createRecipient' className="button"> Add a New Recipient </Link>
            {this.state.recipients.map((recipients) => {
              return <RecipientItem
                key={recipients.id}
                recipientId={recipients.id}
                recipientName={recipients.recipientName}
              />
          })}
      </div>
    </div>
    )
  }
})
