import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  let routeMock = {
    queryParams: {
      subscribe: (res) => {
        res();
      }
    }
  };

  let routerMock = {
    navigate: (arg1, arg2) => {
      return true;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test filterByParams method', () => {
    const queryParam = {
      "launchYear": "2008"
    }
    expect(component.filterByParams).toBeDefined();
    spyOn(component, "filterByParams").and.callThrough();
    component.filterByParams(queryParam);
    expect(component.filterByParams).toHaveBeenCalled();
    // expect(component).toBeTruthy();
  });
});
