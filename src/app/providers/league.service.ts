import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class LeagueService {
  constructor(private http: HttpClient) {}

  getLeagues() {
    return this.http.get(environment.api_url + "/youth_leagues");
  }

  getLeagueTable(id) {
    return this.http.get(environment.api_url + "/youth_leagues/" + id);
  }
}
