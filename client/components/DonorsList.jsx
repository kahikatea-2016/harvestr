import React from 'react'
import {Link} from 'react-router'

import api from '../api'
import Header from './Header'

//pulls in the donors list
//add button to create a new donors

export default React.createClass({

  render () {
    return (
      <div>
        <Header />
        <div className="donorForm">
          <h2> Here is a list of all the donors </h2><br/><br/>
        </div>

          <Link to='/createDonor' className="button"> Add a New Donor</Link>
      </div>

    )
  }
})
