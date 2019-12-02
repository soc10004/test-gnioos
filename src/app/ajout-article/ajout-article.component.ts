import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import * as $ from "jquery";
import { DataserviceService } from "../dataservice.service";
//import { AcceuilComponent } from "../acceuil/acceuil.component";
import { AuthService } from "../authentification/auth.service";

@Component({
  selector: "app-ajout-article",
  templateUrl: "./ajout-article.component.html",
  styleUrls: ["./ajout-article.component.css"]
})
export class AjoutArticleComponent implements OnInit {
  public frm_article: FormGroup;
  public tb_article_save = [];

  constructor(
    public authservice: AuthService,
    public dtservice: DataserviceService,
    public router: Router
  ) {
    this.frm_article = new FormGroup({
      auteur: new FormControl(
        `${window.sessionStorage.getItem("session_gnioos")}`
      ),
      titre_article: new FormControl(``, [
        Validators.required,
        Validators.minLength(10)
      ]),
      desc_article: new FormControl(``, [
        Validators.required,
        Validators.minLength(20)
      ]),
      etat_article: new FormControl(``, [
        Validators.required,
        Validators.minLength(1)
      ])
    });
    $("#modal").hide();
    /* this.dtservice.list_article().subscribe(data => {
      this.tb_article_save = data;
      console.log(this.tb_article_save);
    }); */
  }

  ngOnInit() {
    $("#modal").hide();
  }
  annuler() {
    this.frm_article.reset();
  }
  save_article() {
    if (
      this.titre_article.valid &&
      this.desc_article.valid &&
      this.etat_article.valid
    ) {
      this.dtservice
        .sendarticle(
          this.titre_article.value,
          this.desc_article.value,
          this.etat_article.value,
          this.auteur.value
        )
        .subscribe(data => {
          this.tb_article_save = data;
          $("#titre").text(this.titre_article.value);
          $("#modal").show(1000);

          console.log(this.tb_article_save);
          console.log(this.dtservice.dbtotal);

          setTimeout(() => {
            $("#modal").hide();
          }, 3000);

          /*  window.alert(
            `l'article ${this.titre_article.value} a ete enregistrer avec succes`
          ); */

          this.frm_article.reset();
          window.location.reload();
        });
    }
  }
  get auteur() {
    return this.frm_article.get("auteur");
  }
  get titre_article() {
    return this.frm_article.get("titre_article");
  }
  get desc_article() {
    return this.frm_article.get("desc_article");
  }
  get etat_article() {
    return this.frm_article.get("etat_article");
  }
}
