angular.module('schoolController', ['schoolServices'])

.controller('schoolCtrl', function($location, $timeout, Student, Course) {
    var app = this;

//STUDENTS PART
    app.getStudents = function() {
        Student.get().then(function(response) {
            app.students = response.data;
        });
    };

    app.showStudent = function(id) {
        app.loadme = false;
        Student.getOne(id).then(function(response) {
            app.studentArray  = response.data; 
            app.oneStudent = app.studentArray[0];
            app.loadme = true;
        });
    };

    app.editStudent = function(oneStudent) {
        Student.edit(app.oneStudent).then(function(response) {
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
            app.getStudents();
        });
    };

    app.uploadStudentImage = function(id, files) { 
        app.id = id;
        app.formData = new FormData();
        app.formData.append('studentImage', app.files);  
        app.formData.append('id', app.id);  
           Student.addPic(app.formData).then(function(response) {
            app.res = JSON.parse(response.data);
            if(app.res) {
                app.errorMsg = false;
                app.successMsg = 'The image has been uploaded!';
                app.files = null;
                $timeout(function(){
                    app.successMsg = false;
                }, 2000);               
            } else {
                app.successMsg = false;
                app.files = null;
                app.errorMsg = 'An error occured.';
                $timeout(function(){
                    app.errorMsg = false;
                }, 5000); 
            }
            app.getStudents();
        }); 
    }

    app.deleteStudent = function(id) {
        Student.delete(id).then(function() {
            app.getStudents();
        });
    };

    app.registerStudent = function(newStudent) {
        Student.register(app.newStudent).then(function(response) {
        app.res = parseInt(response.data);
            if(app.res === 1) {
                app.errorMsg = false;
                app.successMsg = 'Student has been created!'
                $timeout(function(){
                    app.successMsg = false;
                    app.newStudent = null
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
// COURSES PART   
    app.getCourses = function() {
        Course.get().then(function(response) {
            app.courses = response.data;
        });
    };

    app.showCourse = function(id) {
        app.loadme = false;
        Course.getOne(id).then(function(response) {
            app.courseArray  = response.data; 
            app.oneCourse = app.courseArray[0];
            app.loadme = true;
        });
    };

    app.editCourse = function(oneCourse) {
        Course.edit(app.oneCourse).then(function(response) {
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
            app.getCourses();
        });
    };

    app.uploadCourseImage = function(id, files) { 
        app.id = id;
        app.formData = new FormData();
        app.formData.append('courseImage', app.files);  
        app.formData.append('id', app.id);  
           Course.addPic(app.formData).then(function(response) {
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
            app.getCourses();
        }); 
    }

    app.deleteCourse = function(id) {
        Course.delete(id).then(function() {
            app.getCourses();
        });
    };

    app.registerCourse = function(newCourse) {
        console.log(app.newCourse);
        Course.register(app.newCourse).then(function(response) {
        app.res = parseInt(response.data);
            if(app.res === 1) {
                app.errorMsg = false;
                app.successMsg = 'Course has been created!'
                $timeout(function(){
                    app.successMsg = false;
                    app.newCourse = null
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



// SOME NAVIGATION
    app.path_newStudent = function() {
        $location.path('/school/new/student');
    };

    app.path_newCourse = function() {
        $location.path('/school/new/course');
    };

    app.path_school = function() {
        $location.path('/school');
    };

});
