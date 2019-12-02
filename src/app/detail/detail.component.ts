import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { DataserviceService } from "../dataservice.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  public detail;

  constructor(
    public route: ActivatedRoute,
    public dservice: DataserviceService,
    public router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.dservice.filtre(id).subscribe(data => {
      this.detail = data;
      console.log(this.detail);
    });
  }
  aller_article() {
    this.router.navigate(["/"]).then(data => {
      console.log(data);
    });
  }
 
}
