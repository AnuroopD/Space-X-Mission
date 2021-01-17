import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, concatMap, catchError, filter, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetMissionService {

  getMissionsURL = 'https://api.spaceXdata.com/v3/launches?limit=100';
  missions: any = [];
  constructor(private http: HttpClient) { }

  public getMissions(params?: any) {
    const httpOptions = params ? {
      params: params
    } : {};
    return this.http.get(this.getMissionsURL, httpOptions).pipe(
      tap((data) => {
        this.missions = data;
      }),
      map((data) => {
        return data;
      })
    );
  }

  setHttpParams(queryParams: any) {

    const params = new HttpParams({
      fromObject: queryParams
    });
    return this.getMissions(params);
  }
}
