import request from 'superagent'

const url = '/v1'

export default {
  getDonors: getDonors,
  getRecipients: getRecipients,
  getDonor: getDonor,
  getRecipient: getRecipient,
  getDonorTicketList: getDonorTicketList,
  getRecipientTicketList: getRecipientTicketList,
  updateTicket: updateTicket,
  updateComment: updateComment,
  addTicket: addTicket
}

  function getDonors(cb) {
    const getUrl = `${url}/donors`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          const donors = res.body.map(donors => {
            return {
              id: donors.id,
              donorName: donors.donorName
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
          const recipients = res.body.map(recipients => {
            return {
              id: recipients.id,
              recipientName: recipients.recipientName
            }
          })
          cb(null, recipients)
        }
      })
  }

  function getDonor(id, cb) {
    const getUrl = `${url}/donors/:${id}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          const donor = {
            name: res.body.name,
            address: res.body.address,
            contact: res.body.contact,
            phone: res.body.phone,
            notes: res.body.notes
          }
          cb(null, donor)
        }
      })
  }

  function getRecipient(id, cb) {
    const getUrl = `${url}/recipients/:${id}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          const recipients = {
            name: res.body.name,
            address: res.body.address,
            contact: res.body.contact,
            phone: res.body.phone,
            notes: res.body.notes
          }
          cb(null, recipient)
        }
      })
  }

  function getDonorTicketList(id, cb) {
    const getUrl = `${url}/donortickets/:${id}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          const donorTicket = {
            expectedKg: res.body.expected,
            name: res.body.name,
            address: res.body.address
          }
          cb(null, donorTicket)
        }
      })
  }

  function getRecipientTicketList(id, cb) {
    const getUrl = `${url}/recipientickets/:${id}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          const recipientTicket = {
            expectedKg: res.body.expected,
            name: res.body.name,
            address: res.body.address
          }
          cb(null, recipientTicket)
        }
      })
  }

  function updateTicket(ticket, cb) {
    const updateUrl = `${url}/tickets`
    request.put(updateUrl)
      .send(ticket)
      .end((err, res) => {
        cb(err)
      })
  }

  function updateComment(comments, cb) {
    const updateUrl = `${url}/comments`
    request.put(updateUrl)
      .send(comments)
      .end((err, res) => {
        cb(err)
      })
  }

  function addTicket(ticket, cb) {
    const addUrl = `${url}/tickets`
    request.post(addUrl)
      .send(ticket)
      .end((err, res) => {
        cb(err)
      })
  }
