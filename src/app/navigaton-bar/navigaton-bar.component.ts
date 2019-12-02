import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import * as rxjs from "rxjs";
import * as operators$ from "rxjs/operators";
import * as $ from "jquery";

import { AuthService } from "../authentification/auth.service";
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: "app-navigaton-bar",
  templateUrl: "./navigaton-bar.component.html",
  styleUrls: ["./navigaton-bar.component.css"]
})
export class NavigatonBarComponent implements OnInit {
  public etat;
  public frm_recherche: FormGroup;
  public dtrecherche = [];
  constructor(
    public router: Router,
    public authservice: AuthService,
    public dtservice: DataserviceService
  ) {}

  ngOnInit() {
    //return this.etat;
    this.frm_recherche = new FormGroup({
      tb_recherche: new FormControl("")
    });
  }

  get etat_connexion() {
    return this.authservice.connecter;
  }

  deconnecter() {
    this.authservice.connecter = !this.etat_connexion;
    window.sessionStorage.removeItem("session_gnioos");
    window.localStorage.removeItem("session_gnioos");

    this.router.navigate(["/"]);
  }
}
