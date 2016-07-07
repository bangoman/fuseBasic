
(function ()
{
    'use strict';

    angular
        .module('app.pages.profile')
        .controller('sendMessageModalCtl', sendMessageModalCtl);
            function sendMessageModalCtl($scope, $mdDialog) {
                var vm = this;


                vm.cancel = function() {
                    $mdDialog.cancel();
                };
                vm.send = function() {
                    $mdDialog.hide();
                };

            }
})();