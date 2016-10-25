import React from 'react'
import {Link} from 'react-router'

import api from '../api'
import Header from './Header'

export default React.createClass({

  render () {
    return (
      <div>
        <Header />
        <div className="RecipientForm">
          <h2> Here is a list of all the Recipients </h2><br/><br/>
        </div>

          <Link to='/createRecipient' className="button"> Add a New Recipient </Link>
      </div>

    )
  }
})
