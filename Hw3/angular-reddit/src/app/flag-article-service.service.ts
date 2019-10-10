import { Injectable } from '@angular/core';
import { Article } from './article/article.model';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class FlagArticleServiceService {
  articles: Article[];
  article: Article;

  constructor() {
    this.articles = AppComponent.prototype.getArticles();
   }

  flag(article: Article) {
    this.article = article;
    for (var i = 0; i < this.articles.length; i++) {
      if (this.article.votes >= this.articles[i].votes) {
        this.article.votes = this.articles[i].votes-1;
      }
    }
  }
}
