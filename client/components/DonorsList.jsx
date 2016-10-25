import React from 'react'
import {Link} from 'react-router'

import api from '../api'
import Header from './Header'

export default React.createClass({
  getInitialState () {
    return {
      donors: []
    }
  },

  componentDidMount () {
    api.getDonors(this.renderResults)
  },

  renderResults (err, donors) {
    this.setState ({
      donors: donors
    })
  },

  render () {
    return (
      <div>
        <Header />
        <div className="donorForm">
          <h2> Here is a list of all the donors </h2><br/><br/>
          <ul>
            {this.state.donors.map(donor =>
              <li key={donor.id}>{donor.donorName}</li>
            )}
          </ul>
          <Link to='/createDonor' className="button"> Add a New Donor </Link>
      </div>
        </div>

    )
  }
})
