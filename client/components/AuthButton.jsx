import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      // <div className="g-signin2" data-onsuccess="onSignIn"></div>
      <a href="/auth/google">Sign In</a>
    )
  }
})
