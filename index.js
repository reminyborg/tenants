const document = require('global/document')

module.exports = tenants

function tenants (tenant, opts) {
  const createElement = opts && opts.create || function () { return document.createElement('div') }
  var tenants = {}

  var tenancy = function (key) {
    if (!tenants[key]) {
      tenants[key] = tenant(createElement(key))
    }

    return tenants[key].apply(this, arguments)
  }

  return tenancy
}
