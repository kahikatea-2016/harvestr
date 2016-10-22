import React from 'react'
import {Link} from 'react-router'

import Header from './Header'
import Banner from './Banner'
import Add from './Add'
import List from './List'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header />
        <Banner />
        <br/>
      </div>
    )
  }
})
