/**

  API responsável por interceptar os acessos as páginas da aplicação

  Create by Renan Lalier
  Since: 27/10/2016
  version: 1.0

**/

module.exports = function(app) {

var ApiMiddleware = {

	middleware: function authenticationMiddleware (req, res, next) {

	    if (req.isAuthenticated()) {
	      return next()
	    }
	    res.redirect('/login')
	}
}

	return ApiMiddleware;
}
