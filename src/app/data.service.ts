import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Object> {
    return this.http.get<Object>("https://swapi.co/api/planets");
  }
}
