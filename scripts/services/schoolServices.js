angular.module('schoolServices', [])

.factory('Student', function($http) {
    var studentFactory = {};

    studentFactory.get = function() {
        return $http.get('../BackToSchool/server_pages/students/get_students.php');
    };

    studentFactory.getOne = function(id) {
        return $http.post('../BackToSchool/server_pages/students/get_one_student.php', {'id':id});
    };

    studentFactory.edit = function(oneStudent) {
        console.log(oneStudent);
        return $http.post('../BackToSchool/server_pages/students/edit_student.php', oneStudent);
    };

    studentFactory.addPic = function(formData) {
        return $http.post('../BackToSchool/server_pages/students/student_image.php', formData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    };

    studentFactory.delete = function(id) {
        return $http.post('../BackToSchool/server_pages/students/delete_student.php', {'id':id});
    };

    studentFactory.register = function(newStudent) {
        console.log(newStudent);
        return $http.post('../BackToSchool/server_pages/students/new_student.php', newStudent);
    };

    return studentFactory;
})

.factory('Course', function($http) {
    var courseFactory = {};

    courseFactory.get = function() {
        return $http.get('../BackToSchool/server_pages/courses/get_courses.php');
    };

    courseFactory.getOne = function(id) {
        return $http.post('../BackToSchool/server_pages/courses/get_one_course.php', {'id':id});
    };

    courseFactory.edit = function(oneCourse) {
        return $http.post('../BackToSchool/server_pages/courses/edit_course.php', oneCourse);
    };

    courseFactory.addPic = function(formData) {
        return $http.post('../BackToSchool/server_pages/courses/course_image.php', formData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    };

    courseFactory.delete = function(id) {
        return $http.post('../BackToSchool/server_pages/courses/delete_course.php', {'id':id});
    };

    courseFactory.register = function(newCourse) {
        return $http.post('../BackToSchool/server_pages/courses/new_course.php', newCourse);
    };

    return courseFactory;
});