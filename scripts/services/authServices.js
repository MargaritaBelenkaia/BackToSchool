angular.module('authServices', [])

.factory('Auth', function($http) {
    var authFactory = {};

    authFactory.login = function(loginData)  {
        return $http.post('../BackToSchool/server_pages/auth/authenticate.php', loginData);
    }

    authFactory.checkLogin = function()  {
        return $http.post('../BackToSchool/server_pages/auth/check_login.php')
    }

    authFactory.logout = function()  {
        return $http.post('../BackToSchool/server_pages/auth/logout.php');
    }

 return authFactory;
    
});

