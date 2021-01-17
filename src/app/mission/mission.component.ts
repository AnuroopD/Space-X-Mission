import { GetMissionService } from './../service/get-mission.service';
import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  missionDetials: any;
  message: any;
  constructor(
    private missionService: GetMissionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.getMissions();
    // this.missionService.missionObs.subscribe(mission => {
    //   console.log('Mission', mission)
    //   this.missionDetials = mission;
    // });
    this.route.queryParams.subscribe((queryParams) => {
      this.missionService.setHttpParams(queryParams).subscribe(mission => {
        console.log('Mission', mission)
        this.missionDetials = mission;
      });
    })

  }

  // getMissions() {
  //   this.missionService.getMissions().subscribe(mission => {
  //     console.log('Mission', mission)
  //     this.missionDetials = mission;
  //   });
  // }

}
