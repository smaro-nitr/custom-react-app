var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8083, function(){
    console.log('React-js-crud server running on 8083...');
});