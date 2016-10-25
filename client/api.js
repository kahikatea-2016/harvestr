import request from 'superagent'

const url = '/v1'

export default {
  getDonors: getDonors,
  getRecipients: getRecipients,
  getDonor: getDonor,
  getRecipient: getRecipient,
  updateTicket: updateTicket,
  updateComment: updateComment,
  addTicket: addTicket,
  getTickets: getTickets,
  getDonorTicket: getDonorTicket,
  getRecipientTicket: getRecipientTicket,
  getTicketComments: getTicketComments,
  createDonor: createDonor,
  createRecipient: createRecipient
}

  function getDonors(cb) {
    const getUrl = `${url}/donors`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          const donors = res.body.map(donor => {
            return {
              id: donor.id,
              donorName: donor.name,
              donorDetailsId: donor.detail_id
            }
          })
          cb(null, donors)
        }
      })
  }

  function getRecipients(cb) {
    const getUrl = `${url}/recipients`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          const recipients = res.body.map(recipient => {
            return {
              id: recipient.id,
              recipientName: recipient.name,
              recipientDetailsId: recipient.detail_id
            }
          })
          cb(null, recipients)
        }
      })
  }

  function getDonor(id, cb) {
    const getUrl = `${url}/donors/${id}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          cb(null, res.body[0])
        }
      })
  }

  function getRecipient(id, cb) {
    const getUrl = `${url}/recipients/${id}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          cb(null, res.body[0])
        }
      })
  }

  function updateTicket(ticket) {
    const updateUrl = `${url}/tickets`
    request.put(updateUrl)
      .send(ticket)
      .end()
  }

  function updateComment (comments) {
    const updateUrl = `${url}/comments`
    request.put(updateUrl)
      .send(comments)
      .end()
  }

  function addTicket (ticket) {
    const addUrl = `${url}/tickets`
    request.post(addUrl)
      .send(ticket)
      .end((err, res) => {
        if(res.status === 403) {
          alert("not allowed")
        }
      })
  }

  function getTickets (cb) {
    const getUrl = `${url}/tickets`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          cb(null, res.body)
        }
      })
  }

  function getDonorTicket (ticketId, cb) {
    const getUrl = `${url}/tickets/donors/${ticketId}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          cb(null, res.body)
        }
      })
  }

  function getRecipientTicket (ticketId, cb) {
    const getUrl = `${url}/tickets/recipients/${ticketId}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          cb(null, res.body)
        }
      })
  }

  function getTicketComments (ticketId, cb) {
    const getUrl = `${url}/tickets/comments/${ticketId}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          cb(null, res.body)
        }
      })
  }

  function createDonor (donor) {
    console.log(donor)
    const addUrl = `${url}/createDonor`
    request.post(addUrl)
      .send(donor)
      .end((err, res) => {
        if(res.status === 403) {
          alert("not allowed")
        }
      })
  }

  function createRecipient (recipient) {
    console.log(recipient)
    const addUrl = `${url}/createRecipient`
    request.post(addUrl)
      .send(recipient)
      .end((err, res) => {
        if(res.status === 403) {
          alert("not allowed")
        }
      })
  }
