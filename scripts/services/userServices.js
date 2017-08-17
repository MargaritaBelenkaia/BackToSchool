angular.module('userServices', [])

.factory('User', function($http) {
    var userFactory = {};

    userFactory.get = function() {
        return $http.get('../BackToSchool/server_pages/users/get_users.php');
    };

    userFactory.get_excludeOwner = function() {
        return $http.get('../BackToSchool/server_pages/users/users_exclude_owner.php');
    };

    userFactory.getOne = function(id) {
        return $http.post('../BackToSchool/server_pages/users/get_one_user.php', {'id':id});
    };

    userFactory.edit = function(oneUser) {
        return $http.post('../BackToSchool/server_pages/users/edit_user.php', oneUser);
    };

    userFactory.delete = function(id) {
        return $http.post('../BackToSchool/server_pages/users/delete_user.php', {'id':id});
    };

    userFactory.register = function(newUser) {
        return $http.post('../BackToSchool/server_pages/users/new_user.php', newUser);
    };

    userFactory.addPic = function(formData) {
        return $http.post('../BackToSchool/server_pages/users/user_image.php', formData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    };

    return userFactory;

});

