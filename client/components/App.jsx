import React from 'react'
import {Link} from 'react-router'

import Header from './Header'
import Banner from './Banner'
import Add from './Add'
import List from './List'
import Api from '../api'

export default React.createClass({
  getInitialState () {
    return {
      tickets: []
    }
  },

  componentDidMount () {
    Api.getTickets(this.renderResults)
  },

  renderResults (err, allTickets) {
    console.log(allTickets)
    this.setState({
      tickets: allTickets
    })
  },

  render() {
    return (
      <div className="mainWrapper">
        <Header />
        <Banner />
        <List tickets={this.state.tickets}/>
        <Link to='/add'> Add </Link>
        <br/>
        <Link to='/list'> View Tickets </Link>
      </div>
    )
  }
})
