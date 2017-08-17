var app = angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/login.html',
        authenticated: false
    })

    .when('/login', {
        templateUrl: 'pages/login.html',
        authenticated: false
    })

    .when('/school', {
        templateUrl: 'pages/school/school.html',
        controller: 'schoolCtrl',
        controllerAs: 'school',
        authenticated: true,
        permission: ['open']

    })

    .when('/school/new/student', {
        templateUrl: 'pages/school/newStudent.html',
        controller: 'schoolCtrl',
        controllerAs: 'school',
        authenticated: true,
        permission: ['open']

    })

    .when('/school/new/course', {
        templateUrl: 'pages/school/newCourse.html',
        controller: 'schoolCtrl',
        controllerAs: 'school',
        authenticated: true,
        permission: ['open']

    })

    .when('/administrators', {
        templateUrl: 'pages/administrators/users.html',
        controller:'usersCtrl',
        controllerAs: 'users',
        authenticated: true,
        permission: ['owner', 'admin']
    })

    .when('/administrators/new', {
        templateUrl: 'pages/administrators/newUser.html',
        controller:'usersCtrl',
        controllerAs: 'users',
        authenticated: true,
        permission: ['owner', 'admin']
    })

    .otherwise({ redirectTo: '/login'});


});


app.run(['$rootScope', 'Auth', '$location', function($rootScope, Auth, $location) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {

//redirect to login if not logged in 
        if(next.$$route.authenticated == true) {  // property 'authenticated' we created above          
            Auth.checkLogin().then(function(response) {        
                if(!response.data.success) {  
                    event.preventDefault();
                    $location.path('/login');
        // redirect to school if not authorized
                } else if(next.$$route.permission[0] !== 'open') {
                    if(next.$$route.permission[0] !== response.data.permission) {
                        if( next.$$route.permission[1] !== response.data.permission) {
                            event.preventDefault();
                            $location.path('/school');
                        }
                    }
                }
            });
// redirect to school if logged in            
        } else if (next.$$route.authenticated == false) {
            Auth.checkLogin().then(function(response) {
                if(response.data.success) {
                    event.preventDefault();
                    $location.path('/school');
                }
            });
        }
    });
}]);


