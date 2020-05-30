import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FixtureService {
  constructor(private http: HttpClient) {}

  getFixtures(id) {
    var url = environment.api_url + "/youth_fixtures";
    if (id) {
      url = url + "?id=" + id;
    }
    return this.http.get(url);
  }
}
