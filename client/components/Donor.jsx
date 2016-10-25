import React from 'react'
import {Link} from 'react-router'

import api from '../api'
import Header from './Header'
import DonorItem from './DonorItem'

export default React.createClass({
  getInitialState () {
    return {}
  },

  componentDidMount () {
    let donor = this.props.params.id
    api.getDonor(donor, this.renderResults)
  },

  renderResults (err, donor) {
    this.setState(donor)
  },

  render() {
    return (
      <div><Header />
        <div className="ticketWrapperSingle">
            <div className="orgInfo">
              <h2> {this.state.name} </h2>
              <a href={`comgooglemaps://?q=${this.state.address}`}>
                <h4> {this.state.address} </h4>
              </a>
            </div>
            <span className="fade_line"></span>
            <div className="contact">
              <h2> {this.state.contact} </h2>
              <a href={`tel:${this.state.phone}`}>
                <h2> {this.state.phone} </h2>
              </a>
            </div>
            <span className="fade_line"></span>
            <div className="notes">
              <h2> Notes </h2>
              <ul>
                <li> {this.state.notes} </li>
              </ul>
            </div>

            </div>

            <div>this should show a donor profile</div>

            <iframe
              className="map-embed"
              width="600"
              height="450"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDrUjwUTFH8bIxN6Aj93o1rL9Gw25vASpk&q=${this.state.address}`}>
            </iframe>
          </div>


    )
  }
})
