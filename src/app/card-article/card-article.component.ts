import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-article",
  templateUrl: "./card-article.component.html",
  styleUrls: ["./card-article.component.css"]
})
export class CardArticleComponent implements OnInit {
  @Input("id_article") id_article: string;
  @Input("titre_article") titre: string;
  @Input("description_article") description: string;

  constructor() {}

  ngOnInit() {}
}
