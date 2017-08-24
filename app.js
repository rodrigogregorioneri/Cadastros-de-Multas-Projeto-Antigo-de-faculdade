var http = require('http').createServer(servidor);
var fs = require('fs');


http.listen(5858, function(){
  console.log("Servidor On-line");
});