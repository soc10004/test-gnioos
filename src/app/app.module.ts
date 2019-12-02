import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AcceuilComponent } from "./acceuil/acceuil.component";
import { EnteteComponent } from "./entete/entete.component";
import { NavigatonBarComponent } from "./navigaton-bar/navigaton-bar.component";
import { Pipe_coupure } from "./pratique/pipetest.pipe";
import { DetailComponent } from './detail/detail.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { CardArticleComponent } from './card-article/card-article.component';
import { CoupureArticlePipe } from './coupure-article.pipe';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ListArticleComponent } from './list-article/list-article.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    Pipe_coupure,
    NavigatonBarComponent,
    AcceuilComponent,
    DetailComponent,
    AjoutArticleComponent,
    CardArticleComponent,
    CoupureArticlePipe,
    LoginComponent,
    RegistrerComponent,
    RechercheComponent,
    ListArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
