var redis = require('./redis')
var rts = require('rts')({
    redis: redis,
    gran: '1m, 5m, 1h, 4h, 1d, 1w, 1M, 1y',
    points: 10000,
    prefix: '' // namespace
})

module.exports = rts
