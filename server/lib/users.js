var config = require('../../knexfile')[process.env.NODE_ENV]
var knex = require('knex')(config)

module.exports = {
  create: create,
  deserialize: deserialize,
  exists: exists,
  getById: getById,
  getByGoogle: getByGoogle,
  serialize: serialize
}

function create (googleId, email) {
  console.log(email)
  return knex('users')
    .insert({
      google_id: googleId,
      email: email
    })
}

function exists (googleId) {
  return knex('users')
    .count('id as n')
    .where('google_id', googleId)
    .then(count => {
      return count[0].n > 0
    })
}

function getById (id) {
  return knex('users')
    .select()
    .where('id', id)
}

function getByGoogle (googleId) {
  return knex('users')
    .select()
    .where('google_id', googleId)
}

function deserialize (id, done) {
  getById(id)
    .then(users => {
      if (users.length === 0) {
        return done(null, false)
      }
      done(null, users[0])
    })
    .catch(err => {
      done(err, false)
    })
}

function serialize (user, done) {
  done(null, user.id)
}
