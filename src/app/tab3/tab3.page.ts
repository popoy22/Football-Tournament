import { Component } from "@angular/core";
import { LeagueService } from "../providers/league.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
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

  returnZero() {
    return 0;
  }
}
