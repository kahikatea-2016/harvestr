import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import api from './api'
import App from './components/App'
import AddRecipientTicket from './components/AddRecipientTicket'
import AddDonorTicket from './components/AddDonorTicket'
import List from './components/List'
import DonorTicket from './components/DonorTicket'
import RecipientTicket from './components/RecipientTicket'
import DonorsList from './components/DonorsList'
import RecipientsList from './components/RecipientsList'
import CreateDonor from './components/CreateDonor'
import CreateRecipient from './components/CreateRecipient'
import DonorItem from './components/DonorItem'
import RecipientItem from './components/RecipientItem'
import Donor from './components/Donor'
import Recipient from './components/Recipient'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route onEnter={api.isStaffMember}>
          <Route path='/addDonorTicket' component={AddDonorTicket} />
          <Route path='/addRecipientTicket' component={AddRecipientTicket} />
          <Route path='/list' component={List} />
          <Route path='/ticket/donor/:ticket' component={DonorTicket} />
          <Route path='/ticket/recipient/:ticket' component={RecipientTicket} />
          <Route path='/donorsList' component={DonorsList} />
          <Route path='/recipientsList' component={RecipientsList} />
          <Route path='/createDonor' component={CreateDonor} />
          <Route path='/createRecipient' component={CreateRecipient} />
          <Route path='/donorItem' component={DonorItem} />
          <Route path='/recipientItem' component={RecipientItem} />
          <Route path='/donor/:id' component={Donor} />
          <Route path='/recipient/:id' component={Recipient} />
        </Route>
      </Router>
    ),
    document.getElementById('app')
  )
})
