import angular from 'angular';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { loginFormModule } from './login-form/login-form.module';
import { CardModule } from './card/card.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { IndexModule } from './view/index.module';
import { ArticlesModule } from './articles/articles.module';
import { AdminArticlesModule } from './admin-articles/admin.articles.module';
import { AdminModule } from './admin/admin.module';
import { ArticleModule } from './article/article.module';

export const ComponentsModule = angular
.module('app.components', [
		ButtonModule,
		InputModule,
		loginFormModule,
		CardModule,
		ArticlesModule,
		IndexModule,
		AdminArticlesModule,
		AdminModule,
		FooterModule,
		HeaderModule,
    ArticleModule
	])
.name;
