'use strict'

/*
textAngular
rangy
bootstrap
ui bootstrap
ng file upload

controller
config
template

api

*/

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AdminArticlesComponent } from './admin.articles.component';
import { AdminArticlesService } from './admin.articles.service';
import './admin.articles.css';

// import 'bootstrap/dist/css/bootstrap.css'

import angularUiBootstrap from 'angular-ui-bootstrap';
import ngFileUpload from 'ng-file-upload';

import template from './upload.html';


import 'textangular/dist/textAngular.css';
//import textAngularSanitize from 'textangular/dist/textAngular-sanitize';
import 'rangy';
import 'rangy/lib/rangy-selectionsaverestore'
// require('textangular/dist/textAngular-rangy.min');
import 'textangular/dist/textAngular-sanitize';
import textAngular from 'textangular/dist/textAngular.min';


export const AdminArticlesModule = angular
	.module('adminArticlesComponent', [
			uiRouter,
			textAngular,
      angularUiBootstrap,
      ngFileUpload
		])
	.service('AdminArticlesService', AdminArticlesService)
	.component('adminArticlesComponent', AdminArticlesComponent)
	.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
		$stateProvider
			.state('admin-articles', {
				url: '/admin-articles',
				template: '<admin-articles-component></admin-articles-component>'
			});
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
		})


    .controller('UploadImageModalInstance', function($scope, $uibModalInstance, Upload){

        $scope.image = 'img/default.png';

        $scope.progress = 0;
        $scope.files = [];

        $scope.upload = function(){
            Upload.upload({
                url: '/api/upload',
                fields: {'dir': 'images/uploads/'},
                file: $scope.files[0],
                method: 'POST'
            }).progress(function (evt) {
                $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
            }).success(function (data) {
                $scope.progress = 0;
                $scope.image = data.dir+data.filename;
            });
        };

        $scope.insert = function(){
            $uibModalInstance.close($scope.image);
        };
    })




    .config(function ($provide) {

            $provide.decorator('taOptions', ['taRegisterTool', '$delegate', '$uibModal', function (taRegisterTool, taOptions, $uibModal) {
                taRegisterTool('uploadImage', {
                    buttontext: 'Upload Image',
                    iconclass: "fa fa-image",
                    action: function (deferred,restoreSelection) {
                        $uibModal.open({
                            controller: 'UploadImageModalInstance',
                            template
                        }).result.then(
                            function (result) {
                                restoreSelection();
                                document.execCommand('insertImage', true, result);
                                deferred.resolve();
                            },
                            function () {
                                deferred.resolve();
                            }
                        );
                        return false;
                    }
                });
                taOptions.toolbar[1].push('uploadImage');
                return taOptions;
            }]);
        })


//
// .config(($provide) => {
//                 // this demonstrates how to register a new tool and add it to the default toolbar
//                 $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) { // $delegate is the taOptions we are decorating
//                     taRegisterTool('test', {
//                         buttontext: 'Test',
//                         action: function() {
//                             alert('Test Pressed')
//                         }
//                     });
//                     taOptions.toolbar[1].push('test');
//                     taRegisterTool('colourRed', {
//                         iconclass: "fa fa-square red",
//                         action: function() {
//                             this.$editor().wrapSelection('forecolor', 'red');
//                         }
//                     });
//                     // add the button to the default toolbar definition
//                     taOptions.toolbar[1].push('colourRed');
//                     return taOptions;
//                 }]);
//                 // this demonstrates changing the classes of the icons for the tools for font-awesome v3.x
//                 /*
// 								$provide.decorator('taTools', ['$delegate', function(taTools){
// 											taTools.bold.iconclass = 'icon-bold';
// 											taTools.italics.iconclass = 'icon-italic';
// 											taTools.underline.iconclass = 'icon-underline';
// 											taTools.ul.iconclass = 'icon-list-ul';
// 											taTools.ol.iconclass = 'icon-list-ol';
// 											taTools.undo.iconclass = 'icon-undo';
// 											taTools.redo.iconclass = 'icon-repeat';
// 											taTools.justifyLeft.iconclass = 'icon-align-left';
// 											taTools.justifyRight.iconclass = 'icon-align-right';
// 											taTools.justifyCenter.iconclass = 'icon-align-center';
// 											taTools.clear.iconclass = 'icon-ban-circle';
// 											taTools.insertLink.iconclass = 'icon-link';
// 											taTools.unlink.iconclass = 'icon-link red';
// 											taTools.insertImage.iconclass = 'icon-picture';
// 											// there is no quote icon in old font-awesome so we change to text as follows
// 											delete taTools.quote.iconclass;
// 											taTools.quote.buttontext = 'quote';
// 											return taTools;
// 										}]);
// 								*/
//             })
//
//
//
//



	.name;
