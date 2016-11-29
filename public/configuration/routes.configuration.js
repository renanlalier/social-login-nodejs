angular.module('app').config(appConfigRoute);

appConfigRoute.$inject = ['$routeProvider', '$locationProvider'];

function appConfigRoute($routeProvider, $locationProvider) {

    $routeProvider

    // rota para cadastro de portador
    .when('/home', {
        templateUrl: 'partials/home/home.html',
        controller: 'homeCtrl'
    })

    .otherwise('/login');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}
