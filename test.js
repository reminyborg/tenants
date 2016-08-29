const test = require('tape')
const tenants = require('./')

test('tenants', function (t) {
  var values = [1, 6, 8, 10]

  var rooms = tenants(function (room) {
    
    return function (key, value) {
      room.value = value
      return room
    }
  }, { create: (key)=>({key:key}) })
  var building = values.map((value, index)=>rooms(index, value))
  values.forEach((value, index)=> t.deepEqual(building[index], { key: index, value: value }))
  t.end()
})
