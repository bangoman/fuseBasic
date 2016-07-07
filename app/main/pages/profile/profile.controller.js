(function ()
{
    'use strict';

    angular
        .module('app.pages.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController(Timeline, About, PhotosVideos, $mdDialog, $mdMedia)
    {
        var vm = this;

        // Data
        vm.posts = Timeline.posts;
        vm.activities = Timeline.activities;
        vm.about = About.data;
        vm.photosVideos = PhotosVideos.data;

        // Methods
        /*
        vm.showSendMessage = function(ev) {
            var confirm = $mdDialog.prompt()
                .title('Leave a message')
                .textContent('Whats on your mind?')
                .placeholder('Write a message here')
                //.ariaLabel('Dog name')
                .targetEvent(ev)
                .ok('Send')
                .cancel('Cancel');
            $mdDialog.show(confirm).then(function(result) {
                vm.message = result;
                console.log('vm.message: ',vm.message);
            }
            //, function() {
            //    somthing to commit if pressed 'cancel'
            //}
            );
        };
        */

        vm.showSendMessage = function(ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: useFullScreen
            })
            .then(function(answer) {
                vm.status = 'You said the information was "' + answer + '".';
            }, function() {
                vm.status = 'You cancelled the dialog.';
            });
            vm.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                vm.customFullscreen = (wantsFullScreen === true);
            });
        };



        //////////
    }

})();
