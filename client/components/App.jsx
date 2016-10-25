import React from 'react'
import {Link} from 'react-router'

import HeaderIndex from './HeaderIndex'
import Banner from './Banner'
import AddRecipientTicket from './AddRecipientTicket'
import AddDonorTicket from './AddDonorTicket'
import List from './List'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <HeaderIndex />
        <Banner />
      </div>
    )
  }
})
