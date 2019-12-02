import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AcceuilComponent } from "./acceuil/acceuil.component";
import { AuthGuard } from "./authentification/auth.guard";
import { DetailComponent } from "./detail/detail.component";
import { EnteteComponent } from "./entete/entete.component";
import { NavigatonBarComponent } from "./navigaton-bar/navigaton-bar.component";
import { AjoutArticleComponent } from "./ajout-article/ajout-article.component";
import { LoginComponent } from "./login/login.component";
import { RegistrerComponent } from "./registrer/registrer.component";

const routes: Routes = [
  {
    path: "",
    component: AcceuilComponent,
    data: {
      message: "message d'acceuil"
    }
  },
  {
    path: "ajouter-article",
    component: AjoutArticleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "connexion",
    component: LoginComponent
  },
  {
    path: "inscription",
    component: RegistrerComponent
  },
  {
    path: ":id",
    component: DetailComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
