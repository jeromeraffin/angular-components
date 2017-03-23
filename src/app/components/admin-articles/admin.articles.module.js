'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {
  AdminArticlesComponent
} from './admin.articles.component';
import {
  AdminArticlesService
} from './admin.articles.service';
import './admin.articles.css';

import template from './upload.html';

import uib from 'angular-ui-bootstrap';
import ngFileUpload from 'ng-file-upload';

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
    ngFileUpload,
    uib
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

  .controller('UploadImageModalInstance', function ($scope, $uibModalInstance, Upload) {

    // .controller('MyCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    //   $scope.uploadFiles = function (file, errFiles) {
    //     $scope.f = file;
    //     $scope.errFile = errFiles && errFiles[0];
    //     if (file) {
    //       file.upload = Upload.upload({
    //         url: 'api/upload',
    //         data: {
    //           file: file
    //         }
    //       });
    //
    //       file.upload.then(function (response) {
    //         // $timeout(function () {
    //         //   file.result = response.data;
    //         // });
    //       }, function (response) {
    //         if (response.status > 0)
    //           $scope.errorMsg = response.status + ': ' + response.data;
    //       }, function (evt) {
    //         file.progress = Math.min(100, parseInt(100.0 *
    //           evt.loaded / evt.total));
    //       });
    //     }
    //   }
    // })

    $scope.image = '';
    $scope.progress = 0;

    $scope.uploadFiles = function (file, errFiles) {

      $scope.errFile = errFiles && errFiles[0];

        file.upload = Upload.upload({
          url: 'api/upload',
          data: {
            file: file
          }
        }).then(function (response) {
          // $timeout(function () {
          //   file.result = response.data;
          // });
          //$scope.progress = 0;
          console.log('test');
          console.log(response);
          $scope.image = response.data.path;
        }, function (response) {
          console.log('test1');
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
          console.log('test2');
          $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
        })

    }

    $scope.insert = function () {
      $uibModalInstance.close($scope.image);
    };

  })

  .config(function ($provide) {

    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', '$uibModal', function (taRegisterTool, taOptions, $uibModal) {
      taRegisterTool('uploadImage', {
        buttontext: 'Upload Image',
        iconclass: "fa fa-image",
        action: function (deferred, restoreSelection) {
          $uibModal.open({
            controller: 'UploadImageModalInstance',
            template
          }).result.then(
             (imgLink) => {
              restoreSelection();
              this.$editor().wrapSelection('insertImage', imgLink, true);
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

  // this demonstrates changing the classes of the icons for the tools for font-awesome v3.x
  /*
								$provide.decorator('taTools', ['$delegate', function(taTools){
											taTools.bold.iconclass = 'icon-bold';
											taTools.italics.iconclass = 'icon-italic';
											taTools.underline.iconclass = 'icon-underline';
											taTools.ul.iconclass = 'icon-list-ul';
											taTools.ol.iconclass = 'icon-list-ol';
											taTools.undo.iconclass = 'icon-undo';
											taTools.redo.iconclass = 'icon-repeat';
											taTools.justifyLeft.iconclass = 'icon-align-left';
											taTools.justifyRight.iconclass = 'icon-align-right';
											taTools.justifyCenter.iconclass = 'icon-align-center';
											taTools.clear.iconclass = 'icon-ban-circle';
											taTools.insertLink.iconclass = 'icon-link';
											taTools.unlink.iconclass = 'icon-link red';
											taTools.insertImage.iconclass = 'icon-picture';
											// there is no quote icon in old font-awesome so we change to text as follows
											delete taTools.quote.iconclass;
											taTools.quote.buttontext = 'quote';
											return taTools;
										}]);
								*/

  .name;
