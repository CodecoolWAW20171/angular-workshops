import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @Input()
  num: number; // acquired from parent in html file

  constructor() {}

  ngOnInit() {
    console.log(this.num);
  }
}
