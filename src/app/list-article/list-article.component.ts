import { Component, OnInit } from "@angular/core";
import { DataserviceService } from "../dataservice.service";
import { AuthService } from "../authentification/auth.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-list-article",
  templateUrl: "./list-article.component.html",
  styleUrls: ["./list-article.component.css"]
})
export class ListArticleComponent implements OnInit {
  public listarticle = [];
  constructor(
    public dtservice: DataserviceService,
    public authserice: AuthService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.dtservice.all_article().subscribe(data => {
      this.listarticle = data;
      console.log(this.listarticle);
    });
  }

  ngOnInit() {
    this.dtservice.all_article().subscribe(data => {
      this.listarticle = data;
    });
  }
  supprimer() {
    const idart = $("#id_article").text();
    const confirmation = window.confirm(
      "Voulez-vous vraiment supprimer cet article?"
    );
    if (confirmation) {
      this.dtservice.supprimer_article(idart).subscribe(data => {
        console.log(data);
        this.dtservice.all_article().subscribe(data => {
          this.listarticle = data;
        });
      });
    }
  }
}
