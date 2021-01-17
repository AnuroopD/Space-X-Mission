import { Component, OnInit, Output } from '@angular/core';
import { EVEN_YEARS, ODD_YEARS } from './filter.component.const';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  messageToParent: any = "Hello Parent!!";
  missionEvenYears = EVEN_YEARS;
  missionOddYears = ODD_YEARS;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
  }

  filterByParams(queryParams: { [key: string]: any }) {
    this.router.navigate(['/'], { relativeTo: this.route, queryParams: queryParams, queryParamsHandling: 'merge' });
  }

}
