import React from 'react'
import Header from './Header'
import api from '../api'

export default React.createClass({
    getInitialState() {
      return {
        donors: []
      }
    },

    componentDidMount() {
      api.getDonors(this.renderResults)
    },

    renderResults(err, donors) {
      this.setState({donors: donors})
    },

    render() {
      return (
        <div>
          <Header />
          <select value="default value">
            <option value="0"> Select Donor Name </option>
            {this.state.donors.map((donor) => {
              return (

              <option key={donor.id} value={donor.donorName}>
                {donor.donorName}
              </option>
            )
            })}
          </select>
        </div>
      )
    }
  })
