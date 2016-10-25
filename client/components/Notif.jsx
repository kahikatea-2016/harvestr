import React from 'react'
import { Notification } from 'react-notification'

export default React.createClass({
  getInitialState () {
    const show = this.props.content.lastComment ? true : false
    return {
      notificationActive: show,
      lastComment: this.props.content.lastComment
    }
  },

  respondToNotification () {
    this.setState({ notificationActive: false })
  },

  render () {
    return (
      <Notification
        isActive={this.state.notificationActive}
        message={this.state.lastComment}
        action={"close"}
        onClick={() => this.respondToNotification()}
      />
    )
  }
})
