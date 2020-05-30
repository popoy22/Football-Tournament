import { Component } from "@angular/core";
import { FixtureService } from "../providers/fixture.service";
import { LeagueService } from "../providers/league.service";
import { ActivatedRoute } from "@angular/router";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  id: string;
  fixtures: any;
  segment: string = "fixture";

  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: "name" },
    { prop: "pts", width: "50" },
    { prop: "gp", width: "50" },
    { prop: "w", width: "50" },
    { prop: "l", width: "50" },
    { prop: "d", width: "50" },
    { prop: "a", width: "50" },
  ];

  data = {
    leaguetable: {
      "1131": {
        name: "NSFSP 1",
        gp: 2,
        w: 1,
        l: 2,
        d: 1,
        a: 2,
        pts: 2,
      },
      "1132": {
        name: "NSFSP 2",
        gp: 2,
        w: 0,
        l: 4,
        d: 0,
        a: 2,
        pts: 0,
      },
      "1133": {
        name: "NSFSP 3",
        gp: 3,
        w: 4,
        l: 0,
        d: 0,
        a: 3,
        pts: 4,
      },
      "1134": {
        name: "Kebun Baru CSC 1",
        gp: 3,
        w: 2,
        l: 2,
        d: 0,
        a: 3,
        pts: 2,
      },
      "1135": {
        name: "Kebun Baru CSC 2",
        gp: 2,
        w: 2,
        l: 1,
        d: 1,
        a: 2,
        pts: 3,
      },
    },
  };

  ColumnMode = ColumnMode;
  navTitle: string;

  constructor(
    private fixtureService: FixtureService,
    private leagueService: LeagueService,
    private activatedRoute: ActivatedRoute
  ) {}

  getFixtures() {
    if (this.activatedRoute.snapshot.params["id"]) {
      this.id = this.activatedRoute.snapshot.params["id"];
    } else {
      this.id = "";
    }
    this.fixtures = null;
    this.fixtureService.getFixtures(this.id).subscribe((fixtures: any) => {
      this.fixtures = fixtures.data;
    });
  }

  getLeagueTable() {
    this.leagueService
      .getLeagueTable(this.id != "" ? this.id : "xx")
      .pipe(
        map((res: any) => {
          for (let key in res.leaguetable) {
            this.rows.push(res.leaguetable[key]);
          }
          this.navTitle = res.tournament_name;
        })
      )
      .subscribe((l: any) => {
        //this.rows = l.leaguetable;
        //console.log(l.leaguetable);
        //console.log(leaguetable.leaguetable);
      });
  }

  ngOnInit(): void {
    /*for (let key in this.data.leaguetable) {
      this.rows.push(this.data.leaguetable[key]);
    } */
    this.getFixtures();
    this.getLeagueTable();
  }
}
