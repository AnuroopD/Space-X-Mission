import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { EVEN_YEARS, LAND, LAUNCH, ODD_YEARS } from './filter.component.const';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, AfterViewInit {
  messageToParent: any = "Hello Parent!!";
  missionEvenYears = EVEN_YEARS;
  missionOddYears = ODD_YEARS;
  missionLaunch = LAUNCH;
  missionLand = LAND;
  status: boolean = false;
  buttonClicked: boolean;
  queryParamArray = [];
  buttonClass: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.updateIsActiveOnInit();
  }

  ngAfterViewInit(): void {

  }

  updateIsActiveOnInit() {
    this.route.queryParams.subscribe(queryParam => {
      const launchYear = queryParam.launch_year;
      const launch = queryParam.launch_success;
      const land = queryParam.land_success;
      const yearArray = this.missionEvenYears.concat(this.missionOddYears);
      const launchYearObj = yearArray.find(val => val.value === launchYear);
      launchYearObj ? (launchYearObj.isActive = true) : '';
      const launchObj = this.missionLaunch.find(val => val.value === launch);
      launchObj ? (launchObj.isActive = true) : '';
      const landObj = this.missionLand.find(val => val.value === land);
      landObj ? (landObj.isActive = true) : '';
    });

  }
  filterByParams(queryParamName: string, queryObj?) {

    const isActive = queryObj.isActive;
    queryObj.isActive = !isActive;
    const queryParams = {};
    queryParams[queryParamName] = !isActive ? queryObj.value : null;
    this.router.navigate(['/'], { relativeTo: this.route, queryParams: queryParams, queryParamsHandling: 'merge' });
  }

  updateIsActiveClass(year) {
    this.missionEvenYears.forEach((val) => {
      if (val.value !== year) {
        val.isActive = false;
      }
    });
    this.missionOddYears.forEach((val) => {
      if (val.value !== year) {
        val.isActive = false;
      }
    })
  }
  updateIsActive(methodName, index) {
    this[methodName].forEach((val, i) => {
      if (i !== index) {
        val.isActive = false;
      }
    })
  }
}



// this[methodName].forEach((val, i) => {
//   if (i !== index) {
//     val.isActive = false;
//   }
// })
