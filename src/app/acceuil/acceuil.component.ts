import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { DataserviceService } from "../dataservice.service";

@Component({
  selector: "app-acceuil",
  templateUrl: "./acceuil.component.html",
  styleUrls: ["./acceuil.component.css"]
})
export class AcceuilComponent implements OnInit {
  public db: Array<any> = [];
  constructor(public r: ActivatedRoute, public dservice: DataserviceService) {}

  ngOnInit() {
    /* this.r.queryParams.subscribe(a => {
      console.log(a);
    }); */
    console.log(this.r.snapshot.data);
    this.dservice.list_article().subscribe(data => {
      this.db = data;

      console.log(this.db);
    });
  }

  Alert() {
    alert("ok");
  }
}
