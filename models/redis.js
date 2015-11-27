var redis = require('redis')
var settings = require('../settings.js')
var redisClient = redis.createClient(settings.redis.port, settings.redis.host)
if(settings.database) {
  redisClient.on('connect', function() {
      redisClient.select(database)
  })
}
redisClient.on('error', function(err) {
    console.log('Redis error:', err.stack)
})

module.exports = redisClient
