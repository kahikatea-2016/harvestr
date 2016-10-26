import React from 'react'
import {Link} from 'react-router'

import api from '../api'
import Header from './Header'
import DonorItem from './DonorItem'

export default React.createClass({
  getInitialState () {
    return {
      donors: []
    }
  },

  componentDidMount () {
    api.getDonors(this.renderResults)
  },

  renderResults (err, allDonors) {
    this.setState ({
      donors: allDonors
    })
  },

  render () {
    return (
      <div>
        <Header />
          <div className="listWrapper">
            <h2> Here is a list of all the donors </h2><br/><br/>
            <Link to='/createDonor' className="button"> Add a New Donor </Link>
              {this.state.donors.map((donors) => {
                return <DonorItem
                  key={donors.id}
                  donorId={donors.id}
                  donorName={donors.donorName}
                />
            })}
        </div>
      </div>
    )
  }
})
