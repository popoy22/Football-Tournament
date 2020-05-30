import { Component } from "@angular/core";
import { LeagueService } from "../providers/league.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  leagues: any;
  constructor(private leagueService: LeagueService) {}

  getLeagues() {
    this.leagueService.getLeagues().subscribe((leagues: any) => {
      this.leagues = leagues.data;
    });
  }

  ngOnInit(): void {
    this.getLeagues();
  }
}
