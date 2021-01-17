import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { GetMissionService } from '../service/get-mission.service';

import { MissionComponent } from './mission.component';

describe('MissionComponent', () => {
  let component: MissionComponent;
  let fixture: ComponentFixture<MissionComponent>;

  let missionServiceMock = {
    setHttpParams: (ququeryParams) => {
      return {
        subscribe: (response) => {
          response();
        }
      }
    }
  };

  let routeMock = {
    queryParams: {
      subscribe: (res) => {
        res();
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionComponent],
      providers: [
        { provide: GetMissionService, useValue: missionServiceMock },
        { provide: ActivatedRoute, useValue: routeMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
