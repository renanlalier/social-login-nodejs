var passport = require('passport');

/**
	Rotas de para autenticação do facebook.

  Create by  Renan Lalier
  since 27/10/2016
  version 1.0
**/

module.exports = function(app){

	app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile','email'], authType: 'rerequest' }));

	app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/home', failureRedirect: '/login'}));

}
