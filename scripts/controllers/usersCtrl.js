angular.module('usersController', ['userServices'])

.controller('usersCtrl', function(User, Auth, $location, $timeout) {
    var app = this;

// SHOW ALL USERS (IF OWNER)
    app.getUsers = function() {
        Auth.checkLogin().then(function(response) {
            app.userPermission = response.data.permission; // authenticated user permission 
            if(app.userPermission === 'owner') {
                User.get().then(function(response) {
                    app.users = response.data;
                });

// SHOW ALL EXCLUDING OWNER
            } else {
                User.get_excludeOwner().then(function(response) {
                    app.users = response.data;
                });
            }
        });
    };

// SHOW ONE USER
    app.showUser = function(id, permission) {
        app.loadme = false;
        app.isNotOwner = true;

        app.displayedId = id; // id of the user whose details are displayed
        app.displayedPermission = permission; // role of the user whose details are displayed

        User.getOne(id).then(function(response) {
            app.userArray  = response.data; 
            app.oneUser = app.userArray[0];
            app.loadme = true;

            //checking permissions: compare authenticated user with the user being displayed
            Auth.checkLogin().then(function(response) {

                app.userId = response.data.id; // authenticated user id
                app.userPermission = response.data.permission; // authenticated user permission

                if(app.userPermission === 'owner') {
                    app.isNotOwner = false;
                } else if (app.displayedId !== app.userId) {
                    app.isNotOwner = false;
            };

            });
        });
    };

// EDIT ONE USER
    app.editUser = function(oneUser) {
        User.edit(app.oneUser).then(function(response) {
            app.res = JSON.parse(response.data);
            if(app.res) {
                app.errorMsg = false;
                app.successMsg = 'The change has been made!'
                $timeout(function(){
                    app.successMsg = false;
                }, 2000);               
            } else {
                app.successMsg = false;
                app.errorMsg = 'An error occured.';
                $timeout(function(){
                    app.errorMsg = false;
                }, 5000); 
            }
            app.getUsers();
        });
    };

// DELETE ONE USER
    app.deleteUser = function(id) {
        User.delete(id).then(function() {
            app.getUsers();
        });
    };

// CREATE A NEW USER
     app.registerUser = function(newUser) {
        User.register(app.newUser).then(function(response) {
             app.res = parseInt(response.data);
             console.log(app.res);
             if(app.res === 1) {
                app.errorMsg = false;
                app.successMsg = 'User has been created!'
                $timeout(function(){
                    app.successMsg = false;
                    app.newUser = null
                }, 2000); 
             }  else {
                app.successMsg = false;
                app.errorMsg = 'An error occured.';
                $timeout(function(){
                    app.errorMsg = false;
                }, 5000); 
             } 
        });
    };

// UPLOAD A PICTURE
    app.uploadUserImage = function(id, files) {
        app.id = id;
        app.formData = new FormData();
        app.formData.append('userImage', app.files);  
        app.formData.append('id', app.id);  
           User.addPic(app.formData).then(function(response) {
            app.res = JSON.parse(response.data);
            if(app.res) {
                app.errorMsg = false;
                app.successMsg = 'The image has been uploaded!'
                $timeout(function(){
                    app.successMsg = false;
                }, 2000);               
            } else {
                app.successMsg = false;
                app.errorMsg = 'An error occured.';
                $timeout(function(){
                    app.errorMsg = false;
                }, 5000); 
            }
            app.getUsers();
        }); 
    } 


// SOME NAVIGATION
    app.path_newUser = function() {
        $location.path('/administrators/new');
    };

    app.path_admins = function() {
        $location.path('/administrators');
    };

});

