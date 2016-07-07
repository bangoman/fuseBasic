

(function ()
{
    'use strict';

    angular
        .module('app.pages.profile')
        .controller('sendMessageModalCtl', sendMessageModalCtl);
            function sendMessageModalCtl($scope, $mdDialog) {
                var vm = this;

                // vm.hide = function() {
                //     $mdDialog.hide();
                // };
                vm.cancel = function() {
                    $mdDialog.cancel();
                };
                vm.answer = function(answer) {
                    $mdDialog.hide(answer);
                };
            }
})();