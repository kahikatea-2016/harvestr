import React from 'react'
import {Link} from 'react-router'
import AddTicketButton from './AddTicketButton'
import AuthButton from './AuthButton'
import ViewListButton from './ViewListButton'
import SignOutButton from './SignOutButton'

export default React.createClass({
  render() {
    return (

        <div className="header">
          <span className="logo"> Harvestr </span>
          <div className="auth">
            <a href="/auth/google" className="navButton"> Login </a>
          </div>
        </div>

    //   <div className="header">
    //     <Link to="/"> <span className="logo"> Harvestr </span> </Link>
    //     <div className="auth">
    //       <SignOutButton />
    //       <AddTicketButton />
    //       <ViewListButton />
    //       <AuthButton />
    //   </div>
    // </div>


    )
  }
})
