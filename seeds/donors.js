exports.seed = function(knex, Promise) {
  return knex('comments').del()
  .then(() => knex('tickets').del())
  .then(() => knex('donors').del())
  .then(() => knex('recipients').del())
  .then(() => knex('details').del())
  .then(() => knex('permissions').del())
  .then(() => knex('users').del())
  .then(function () {
    return knex ('details').insert([
      {id: 1, address: '76 Quay Street, Auckland CBD', contact_person: 'Amanda', phone: '092468792', notes: 'Do not pick up before 11am'},
      {id: 2, address: '422 Dominion Road, Mount Eden', contact_person: 'Garry', phone: '092649784', notes: 'Parking available at back of store'},
      {id: 3, address: '2 College Hill, Freemans Bay', contact_person: 'Olivia', phone: '092648732', notes: 'Call first before pick up'},
      {id: 4, address: '200 Dominion Road, Mount Eden', contact_person: 'Jack', phone: '0927684315', notes: 'Parking available at back'},
      {id: 5, address: '3/449 Richmond Road, Grey Lynn', contact_person: 'Stevie', phone: '092647351', notes: 'Look for the red building'},
      {id: 6, address: '4 Warnock Street, Grey Lynn', contact_person: 'Sandy', phone: '092687493', notes: 'Ask for Carol if Sandy is not available'}
    ])
  })
  .then(function () {
    return knex ('donors').insert([
      {id: 1, name: 'Countdown', detail_id: 1},
      {id: 2, name: 'NOSH', detail_id: 2},
      {id: 3, name: 'New World', detail_id: 3}
    ])
  })
  .then(function (){
    return knex ('recipients').insert([
      {id: 1, name: 'Salvation Army', detail_id: 4},
      {id: 2, name: 'Grey Lynn Family Trust', detail_id: 5},
      {id: 3, name: 'Womens Refuge', detail_id: 6}
    ])
  })
  .then(function () {
    return knex ('tickets').insert([
      {id: 1, expected_kg: 50, actual_kg: null, donor_id: 1, recipient_id: null, details_id: 1, is_complete: false},
      {id: 2, expected_kg: 70, actual_kg: null, donor_id: 2, recipient_id: null, details_id: 2, is_complete: false},
      {id: 3, expected_kg: 40, actual_kg: null, donor_id: null, recipient_id: 1, details_id: 4, is_complete: false},
      {id: 4, expected_kg: 10, actual_kg: null, donor_id: null, recipient_id: 2, details_id: 5, is_complete: false},
      {id: 5, expected_kg: 70, actual_kg: null, donor_id: null, recipient_id: 3, details_id: 6, is_complete: false}
    ])
  })
  .then(function () {
    return knex ('comments').insert([
      {id: 1, ticket_id: 1, comments: 'Picked up more 10 kgs of potatos'},
      {id: 6, ticket_id: 1, comments: 'Ran a little late'},
      {id: 2, ticket_id: 2, comments: 'Traffic was congested today'},
      {id: 3, ticket_id: 3, comments: 'Delivered and helped move some meals'},
      {id: 4, ticket_id: 4, comments: 'We were late because of traffic'},
      {id: 5, ticket_id: 5, comments: 'They were happy with the potatos as well'}
    ])
  })
  .then(function () {
    return knex ('users').insert([
      {id: 1, email: 'tinatrenkner@gmail.com', google_id: '112615148426911623293'},
      {id: 2, email: 'andrew.james.hird@gmail.com', google_id: '114056495607785581130'},
      {id: 3, email: 'jsmare@gmail.com', google_id: '106271496586390221277'},
      {id: 4, email: 'samari.b.dj@gmail.com', google_id: '118018160081912906533'},
      {id: 5, email: 'thcoomer@gmail.com', google_id: '112992150127876198177'},
      {id: 6, email: 'tealiie@live.com', google_id: '106683677154329041656'},
    ])
  })
  .then(function () {
    return knex ('permissions').insert([
      {id: 1, level: 'admin', user_id: 1},
      {id: 2, level: 'admin', user_id: 2},
      {id: 3, level: 'admin', user_id: 3},
      {id: 4, level: 'admin', user_id: 4},
      {id: 5, level: 'admin', user_id: 5},
      {id: 6, level: 'admin', user_id: 6},
    ])
  })
};
