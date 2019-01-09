import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.scss"]
})
export class PlanetsComponent implements OnInit {
  private _name: String = "Mark";
  planets$: Object;
  err$: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.err$ = false;
    this.dataService.getPlanets().subscribe(
      data => {
        this.planets$ = data["results"];
      },
      er => {
        this.err$ = true;
      }
    );
  }
}
