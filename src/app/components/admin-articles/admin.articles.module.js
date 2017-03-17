'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AdminArticlesComponent } from './admin.articles.component';
import { AdminArticlesService } from './admin.articles.service';
import './admin.articles.css';


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
			textAngular
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


.config(($provide) => {
                // this demonstrates how to register a new tool and add it to the default toolbar
                $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) { // $delegate is the taOptions we are decorating
                    taRegisterTool('test', {
                        buttontext: 'Test',
                        action: function() {
                            alert('Test Pressed')
                        }
                    });
                    taOptions.toolbar[1].push('test');
                    taRegisterTool('colourRed', {
                        iconclass: "fa fa-square red",
                        action: function() {
                            this.$editor().wrapSelection('forecolor', 'red');
                        }
                    });
                    // add the button to the default toolbar definition
                    taOptions.toolbar[1].push('colourRed');
                    return taOptions;
                }]);
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
            })
            





	
	.name;
