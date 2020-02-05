// const proxy = require('http-proxy-middleware');  module.exports = function (app) 
// { app.use(proxy('/api/', { target: 'http://localhost:3002/' })) 
// ; };

const proxy = require('http-proxy-middleware')
module.exports = function(app) {
	app.use(proxy('/api/', { target: 'http://localhost:3002/' }))
}