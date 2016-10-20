import test from 'tape-async'
import knex from 'knex'

import getDetails from '../server/db'

const testConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {filename: ':memory:'}
}

test('getDetails', function (t) {
  createTestData().then(testDb => {
    // console.log(details)
   getDetails(testDb)
    .then(details => {
      t.equal(details.id, 1)
      t.equal(details.donorName, 'Countdown')
      t.equal(details.donorAddress, '76 Quay Street, Auckland CBD')
      testDb.destroy()
      t.end()
    })
  })
})

function createTestData () {
  const testDb = knex(testConfig)
  return testDb.migrate.latest(testConfig)
  .then(() => {
    return testDb.seed.run(testConfig)
    .then(() => testDb)
  })
}
