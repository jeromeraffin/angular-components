import angular from 'angular';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { loginFormModule } from './login-form/login-form.module';
import { CardModule } from './card/card.module';
import { FooterModule } from './footer/footer.module';
import { IndexModule } from './view/index.module';
import { ArticlesModule } from './articles/articles.module';
import { BackArticlesModule } from './back-articles/back.articles.module';
import { BackModule } from './back/back.module';
import { ArticleModule } from './article/article.module';

export const ComponentsModule = angular
.module('app.components', [
	ButtonModule, InputModule, loginFormModule, CardModule, ArticlesModule, IndexModule, BackArticlesModule, BackModule, FooterModule, ArticleModule
	])
.name;

