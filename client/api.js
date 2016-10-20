import request from 'superagent'

const url = '/v1'

export default {
  getDonors(cb) {
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

  getRecipients(cb) {
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

  getTickets(cb) {
    const getUrl = `${url}/tickets`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          const tickets = res.body.map(tickets => {
            return {
              id: tickets.id,
              name: tickets.name,
              address: tickets.address,
              weight: tickets.weight
            }
          })
          cb(null, recipients)
        }
      })
  }

  getTicket(id, cb) {
    const getUrl = `${url}/ticket/:${id}`
    request.get(getUrl)
      .end((err, res) => {
        if (err) {
          cb(err)
        } else {
          const ticket = res.body.map(ticket => {
            return {
              id: ticket.id,
              name: ticket.name,
              address: ticket.address,
              person: ticket.person,
              phone: ticket.phone,
              expectedKg: ticket.expectedKg,
              actualKg: ticket.actualKg,
              notes: ticket.notes,
              comments: ticket.comments,
              isComplete: ticket.isComplete
            }
          })
          cb(null, ticket)
        }
      })
  }

  addTicket(ticket, cb) {
    const addUrl = `${url}/tickets`
    request.post(addUrl)
      .send(ticket)
      .end((err, res) => {
          cb(err)
        }
      })

}
