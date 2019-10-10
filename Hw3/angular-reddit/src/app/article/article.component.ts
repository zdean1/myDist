import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
import { FlagArticleServiceService } from '../flag-article-service.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private _flagarticle: FlagArticleServiceService) {

   }

   voteUp(): boolean{
     this.article.voteUp();
     return false;
   }

   voteDown(): boolean {
     this.article.voteDown();
     return false;
   }

   flagArticle(): boolean {
     this._flagarticle.flag(this.article);
          return false;
   }

   ngOnInit() { }

}
