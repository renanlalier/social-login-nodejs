/**

  API responsável por realizar redirecionamento de páginas após a autenticação

  Create by Renan Lalier
  Since: 27/10/2016
  version: 1.0

**/

module.exports = function(app) {

    var LoginController = {

        login: function(req, res) {
            res.render('login');
        },

        index: function(req, res) {
            res.render('index');
        }

    };

    return LoginController;

};
