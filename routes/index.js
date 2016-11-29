/**

	Rotas NodeJS para SinglePageApplication

  Create by  Renan Lalier
  since 27/10/2016
  version 1.0
**/

module.exports = function(app) {

    var loginController = app.controllers.loginController;
    var middlewareController = app.controllers.middlewareController;

    app.get('/login', loginController.login);
    app.get('*', middlewareController.middleware, loginController.index);

};
