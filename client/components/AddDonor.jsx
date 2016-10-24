import React from 'react'
import {Link} from 'react-router'
import Header from './Header'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div className="donorForm">
          <h2> Create a Donor Profile </h2><br/><br/>

            <input type="text"
              placeholder="Name of Organisation"
              onChange={this.handleChange} /><br/><br/>

            <input type="text"
              placeholder="Address"
              onChange={this.handleChange} /><br/><br/>

            <input type="text"
              placeholder="Contact Person"
              onChange={this.handleChange} /><br/><br/>

            <input type="text"
              placeholder="Phone"
              onChange={this.handleChange} /><br/><br/>

            <input type="text"
              placeholder="Additional Notes"
              onChange={this.handleChange} /><br/><br/><br/>

<Link to='createDonor'>
  <input className="button" type="submit" value="Submit" onCick={() => this.createDonor()}/>
</Link>

      </div>
    </div>
    )
  }
})
//
