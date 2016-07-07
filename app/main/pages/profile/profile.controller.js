(function ()
{
    'use strict';

    angular
        .module('app.pages.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController(Timeline, About, PhotosVideos, $mdDialog, $mdMedia, $scope)
    {
        var vm = this;

        // Data
        vm.posts = Timeline.posts;
        vm.activities = Timeline.activities;
        vm.about = About.data;
        vm.photosVideos = PhotosVideos.data;

        // Methods

        vm.showSendMessage = function(ev) {
            $mdDialog.show({
                controller: 'sendMessageModalCtl as vm',
                templateUrl: 'app/main/pages/profile/sendMessageModal.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            })
        };
        //////////
    }

})();
