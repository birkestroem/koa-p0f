const p0f = require('p0fclient-wrapper')
const ipaddr = require('ipaddr.js')
const defaultOptions = {
  'headerPrefix': 'x-p0f-'
}

module.exports = function (options) {
  const opts = Object.assign({}, defaultOptions, options)

  return async (ctx, next) => {
    const ip = ipaddr.parse(ctx.request.ip).toNormalizedString()

    try {
      const data = await p0f(ip)
      Object.keys(data || {}).forEach((key) => {
        ctx.set(opts.headerPrefix + key, data[key])
      })
    } catch (e) {
      ctx.set(opts.headerPrefix + 'status', 'error')
      ctx.set(opts.headerPrefix + 'error', e.toString())
    }
    return next()
  }
}
