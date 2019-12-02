import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import * as rx from "rxjs";

import { DataserviceService } from "../dataservice.service";
import { AuthService } from "../authentification/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public datalogin = [];
  public route: ActivatedRoute;
  public formlogin: FormGroup;

  constructor(
    public authservice: AuthService,
    public dtservice: DataserviceService,
    public router: Router
  ) {
    this.formlogin = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      passe: new FormControl("", [
        Validators.minLength(4)
      ])
    });
  }

  ngOnInit() {}
  login(email?: any, passe?: any) {
    this.dtservice
      .sendlogin((this.email.value as string).toLowerCase(), this.passe.value)
      .subscribe(d => {
        this.datalogin = d;
        if (this.datalogin.length > 0) {
          this.authservice.connecter = true;
          console.log(this.datalogin);
          window.sessionStorage.setItem(
            `session_gnioos`,
            JSON.stringify(this.datalogin[0].email)
          );
          
          this.router.navigate(["/"]);
        } else {
          console.log(this.datalogin);
          this.router.navigate(["/connexion"]);
          this.authservice.connecter = false;
        }
      });
  }

  get email() {
    return this.formlogin.get("email");
  }
  get passe() {
    return this.formlogin.get("passe");
  }
}
