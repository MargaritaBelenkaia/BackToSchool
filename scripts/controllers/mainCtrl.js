angular.module('mainController', ['authServices'])

.controller('mainCtrl', function($location, Auth, $timeout, $rootScope) {
    var app = this;

    app.loadme = false;

//CHECK SESSION ON PAGE LOAD
    $rootScope.$on('$routeChangeStart', function() {
        app.isNotOwner = true;
        Auth.checkLogin().then(function(response) {

            if(response.data.success) {
                app.isLoggedIn = true;
                app.userId = response.data.id;
                app.userName = response.data.name;
                app.permission = response.data.permission;
                app.image = response.data.image;

                if (app.permission === 'owner') {
                    app.isNotOwner = false;
                    app.isAuthorized = true;
                    app.loadme = true;
                }
                else if(app.permission === 'admin') {
                    app.isAuthorized = true;
                    app.loadme = true;
                } else {
                    app.isAuthorized = false;
                    app.loadme = true;
                }
            } else {
                app.isLoggedIn = false;
                app.user_name = '';
                app.loadme = true;
            }
        });
    });


//USER LOGIN
    app.login = function(loginData, valid) {
        app.errorMsg = false;
        if(valid) {
            Auth.login(app.loginData).then(function(response) {
                if(response.data.success) {
                    app.successMsg = response.data.message;
                    $timeout(function() {
                        $location.path('/school'); 
                        app.successMsg = false;
                        app.loginData = null;
                    }, 2000);          
                } else {
                    app.errorMsg = response.data.message;
                }
            });
        } else { 
            app.errorMsg = 'Please fill out the form';      
        }
    }


//USER LOGOUT
    app.logout = function() {
        Auth.logout();
        $location.path('/login');
    }
});