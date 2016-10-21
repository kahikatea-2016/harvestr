import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="ticketWrapperSingle">
        <div className="orgInfo">
          <h2> {OrganisationName} </h2>
          <h4> {Address} </h4>
        </div>
        <span className="fade_line"></span>
        <div className="contact">
          <h2> {ContactName} </h2>
          <h2> {ContactNumber} </h2>
        </div>
        <span className="fade_line"></span>
        <div className="inventory">
          <h2> {TicketWeight} </h2>
          <h2> {ProductName} </h2>
        </div>
        <span className="fade_line"></span>
        <div className="notes">
          <h2> Notes </h2>
          <ul>
            {this.props.notes.map(note => {
              return(
                <li> {TicketNote} </li>
              )
            })}
          </ul>
        </div>
        <span className="fade_line"></span>
        <div className="comments">
          <label> Comments </label>
          <br/>
          <ul>
            {this.props.comments.map(comment => {
              return(
                <li> {TicketComment} </li>
              )
            })}
          </ul>
          <br/>
          <textarea rows="4" cols="40" className="textInput" placeholder="Write a Comment"></textarea>
          <br/>
          <input className="button" type="submit" value="Post"/>
        </div>
      </div>
    )
  }
})
