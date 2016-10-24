import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import AddRecipientTicket from './components/AddRecipientTicket'
import AddDonorTicket from './components/AddDonorTicket'
import List from './components/List'
import DonorTicket from './components/DonorTicket'
import RecipientTicket from './components/RecipientTicket'
import CreateDonor from './components/CreateDonor'
import CreateRecipient from './components/CreateRecipient'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/addDonorTicket' component={AddDonorTicket} />
        <Route path='/addRecipientTicket' component={AddRecipientTicket} />
        <Route path='/list' component={List} />
        <Route path='/ticket/donor/:ticket' component={DonorTicket} />
        <Route path='/ticket/recipient/:ticket' component={RecipientTicket} />
        <Route path='/createDonor' component={CreateDonor} />
        <Route path='/createRecipient' component={CreateRecipient} />
      </Router>
    ),
    document.getElementById('app')
  )
})
