angular.module('fileModel', [])

.directive('imageModel', function($parse) {

    return{
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('change', function(event) {
                var files = event.target.files;
                $parse(attrs.imageModel).assign(scope, element[0].files[0]);
                scope.$apply();
            });
        }
    }

});
