import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as rxjs from "rxjs";

import { ArtcleModel } from "./artcle-model";

@Injectable({
  providedIn: "root"
})
export class DataserviceService {
  public dbtotal = [];
  constructor(public http: HttpClient) {}
  list_article(): rxjs.Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/article");
  }
  supprimer_article(id): rxjs.Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/article/${id}`);
  }
  all_article(): rxjs.Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/allarticle");
  }
  filtre(id: string): rxjs.Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/article/" + id);
  }

  list_utilisateurs(): rxjs.Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/utilisateurs/");
  }
  list_admin(): rxjs.Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/utilisateurs/admin");
  }
  list_user(): rxjs.Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/utilisateurs/user");
  }
  list_recherche(article): rxjs.Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/recherche/" + article);
  }
  sendlogin(email, passe): rxjs.Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/login", {
      email: email,
      passe: passe
    });
  }
  sendarticle(nom, desc, etat, auteur): rxjs.Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/article", {
      nom_article: nom,
      description: desc,
      etat: etat,
      auteur: auteur
    });
  }
}
