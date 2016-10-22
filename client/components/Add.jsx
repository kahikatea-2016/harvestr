import React from 'react'
import Header from './Header'
import api from '../api'

let ticket = null
let selectDonor = null
let expectedKg = null

export default React.createClass({
    getInitialState() {
      return {
        donors: []
      }
    },

    handleChange(event) {
      this.setState({value: event.target.value});
    },

    componentDidMount() {
      api.getDonors(this.renderResults)
    },

    renderResults(err, donors) {
      this.setState({donors: donors})
    },

    addDonorTicket () {
      // const donorId = {
      //   donorId: donor.id
      // }
      // api.addTicket(donorId)
      let newTicket = {
        donorId: selectDonor.id,
        expectedKg: expectedKg.value
      }
      console.log(newTicket)
      api.addTicket(newTicket)
    },

    render() {
      return (
        <div>
          <Header />
          <div className="donorForm">
            <h2> Create a Donor Ticket </h2>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="0"> Select Donor Name </option>
              {this.state.donors.map((donor) => {
                return (
                  <option key={donor.id} id={donor.id} value={donor.donorName}
                  ref={function (input) {
                    selectDonor = input
                  }} >
                    {donor.donorName}
                  </option>
                )
              })}
            </select>
            <br/>
            <label htmlFor="weight"> Expected Weight: </label>
            <br/>
            <input name="weight" type="number" min="1" max="999" placeholder="Kilograms" ref={function (input) {
              expectedKg = input
            }} />
            <br/>
            <input className="button" type="submit" value="Submit" onClick={() => this.addDonorTicket()}/>
          </div>
        </div>
      )
    }
  })
