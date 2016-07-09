angular.module('lenmeFrontend', ['ui.bootstrap','ngRoute','ngAnimate']);

angular.module('lenmeFrontend').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('lenmeFrontend').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
