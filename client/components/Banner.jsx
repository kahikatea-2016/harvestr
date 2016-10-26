import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="contentWrapper">
        <div className="homeWrapper">
          {/* <a href="/auth/google" className="authButtonIndex"> Login </a> */}
          <div className="homeText">
            <h1> Harvestr </h1>
            <h4> Picking up surplus food as soon as possible. </h4>
            <span className="fade_line_home"></span>
            <h2>
              {/* Coordinating between supermarkets and food banks, we make sure our drivers are able to get donations to those in need. */}
              Coordinating between supermarkets and food banks, we make sure our drivers are able to deliver donations to those in need.
            </h2>
            <span className="fade_line_home_lower"></span>
            <a href="/auth/google" className="authButtonIndex"> Login </a>
          </div>
        </div>
      </div>
    )
  }
})
