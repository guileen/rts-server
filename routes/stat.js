var ts = require('../models/rts')

module.exports = function(app) {
  // curl -d 'behavior=click&value=1'
  app.post('/stat/record', function(req, res) {
      var body = req.body;
      var value = body.value == null ? 1 : Number(body.value);
      // analytics every thing
      console.log(body, value)
      ts.record(body.behavior, value, ['sum','count','avg','min','max'], ['hm', 'hq', 'hy', 'dm', 'dq', 'dy'], Date.now(), function(err, result) {
          res.send({status:'OK'})
      })
  })

  app.get('/stat/report', function(req, res) {
      // TODO
      // ts.query
  })
}
