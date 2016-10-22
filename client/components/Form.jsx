import React from 'react'

import api from '../api'

import Header from './Header'
import Banner from './Banner'

export default React.createClass({
  getInitialState() {
    return : {
      donors: []
    }
  },

  componentDidMount() {
    api.getDonors(this.renderResults)
  },

  renderResults(err, allDonors) {
    this.setState({donors: allDonors})
  },

  render() {
    return (
      <div>
        <select>
          {this.select.donors.map((donors) => {
            return <option> {this.props.donorName} </option>
          })}
        </select>
      </div>
    )
  }
})
