import { Injectable } from "@angular/core";

import * as rx from "rxjs";

import { DataserviceService } from "../dataservice.service";
import { LoginComponent } from "../login/login.component";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public dtservice: DataserviceService;
  public est_connecter = false;
  constructor() {}

  get connecter(): boolean {
    return this.est_connecter;
  }
  set connecter(etat) {
    this.est_connecter = etat;
  }
}
