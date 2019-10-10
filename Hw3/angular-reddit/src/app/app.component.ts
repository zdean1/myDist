import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  article: Article;

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', "administrator", 3),
      new Article('Fullstack', 'http://fullstack.io', "user", 2),
      new Article('Angular Homepage', 'http://angular.io', "user", 1)
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement, role: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, role.value.toLowerCase(), 0));
    console.log(this.articles);
    title.value = '';
    link.value = '';
    role.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  getArticles(): Article[] {
    return this.articles;
  }

}
