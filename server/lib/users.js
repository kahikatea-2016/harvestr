var config = require('../../knexfile')[process.env.NODE_ENV]
var knex = require('knex')(config)

module.exports = {
  create: create,
  exists: exists,
  getById: getById,
  getByGoogle: getByGoogle,
  requiresAdmin: requiresAdmin,
  requiresDriver: requiresDriver
}

function create (googleId, email) {
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
    .join('permissions', 'users.id', 'permissions.user_id')
    .select('users.id as id', 'users.email as email', 'users.google_id as googleId', 'permissions.level as level')
    .where('id', id)
}

function getByGoogle (googleId) {
  return knex('users')
    .join('permissions', 'users.id', '=', 'permissions.user_id')
    .select('users.id as id', 'users.email as email', 'users.google_id as googleId', 'permissions.level as level')
    .where('google_id', googleId)
}

function requiresAdmin (req, res, next) {
  if (req.user.level === 'admin') {
    next()
  } else {
    next(new Error("You don't have permission!"))
  }
}

function requiresDriver (req, res, next) {
  if (['admin', 'driver'].includes(req.user.level)) {
    next()
  } else {
    next(new Error("You don't have permission!"))
  }
}
