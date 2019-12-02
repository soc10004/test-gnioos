import { Component } from "@angular/core";
import * as browser from "@angular/platform-browser";

import { AuthService } from "../app/authentification/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public bp: browser.Title, public authservice: AuthService) {}
  ngOnInit() {
    this.bp.setTitle("Binevenue sur la plateforme d'information GNIOOS");
    if (window.sessionStorage.getItem("session_gnioos")) {
      this.authservice.connecter = !this.authservice.connecter;
    } else {
      this.authservice.connecter = this.authservice.connecter;
    }
  }
}
