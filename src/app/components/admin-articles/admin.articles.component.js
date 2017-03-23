'use strict'

import template from './admin.articles.html';

export const AdminArticlesComponent = {
	template,
	controller: class AdminArticlesComponent {
		constructor(AdminArticlesService, Upload) {
      this.AdminArticlesService = AdminArticlesService;

      this.Upload = Upload;

			this.articleId = '';
			this.formData = {};

			this.AdminArticlesService.getArticles().then((res) => {
			    this.articles = res.articles;
			});
		}

		selectArticle(id) {
			this.AdminArticlesService.selectArticle(id).then((res) => {
					this.formData = res;
			});
			this.articleId = id;
		}

		action() {
			if(this.articleId === '') {
				this.AdminArticlesService.createArticle(this.formData).then((res) => {
			  	  this.articles = res;
				});
			}
			else {
				this.AdminArticlesService.updateArticle(this.articleId, this.formData).then((res) => {
			  	  this.articles = res;
				});
				this.articleId = '';
				this.formData = {};
			}
		}

		deleteArticle(id) {
			this.AdminArticlesService.deleteArticle(id).then((res) => {
					this.articles = res;
			});
		}

    upload(){
      this.image = 'imgages/default.png';

      console.log('ets');

      this.progress = 0;
      this.files = [];

      this.test = () => {
        console.log('test');
      }

      this.upload = () => {
        console.log('test');
          this.Upload.upload({
              url: '/api/upload',
              fields: {'dir': 'imgages/uploads/'},
              file: this.files[0],
              method: 'POST'
          }).progress( (e) =>  {
              this.progress = parseInt(100.0 * e.loaded / e.total);
          }).success( (data) => {
              this.progress = 0;
              this.image = data.dir+data.filename;
          });
      };

      this.insert = () => {
          $uibModalInstance.close(this.image);
      };
  }




  }
};
