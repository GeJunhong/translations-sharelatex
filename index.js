var i18n = require("i18next");
var fs = require("fs")

i18n.init({resGetPath: __dirname+'/locales/__lng__.json'})
module.exports = {
      expressMiddlewear: i18n.handle,
      serverStaticFiles: function(req, res, next){
      		if(req.url.indexOf("/locales") == 0){
      			res.sendfile(__dirname+req.url)
      		} else {
	      		next()

      		}
      }
}