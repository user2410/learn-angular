import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  
  constructor(
    private articleServices: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.sharedService.blogTitle}`);
    this.getArticles();
    // console.log(this.articles);
  }

  getArticles(): void{
    this.articleServices.getArticles().subscribe(articles=>(this.articles = articles));
  }
}
