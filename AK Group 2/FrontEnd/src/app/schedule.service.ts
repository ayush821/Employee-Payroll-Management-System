import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  baseUrl:string ="http://localhost:9090/schedule"
  constructor(public http:HttpClient) { }

  storeSchedule(schedule:any):Observable<string> {
    return this.http.post(this.baseUrl+"/storeSchedule",schedule,{responseType:"text"});
  }

  viewschedule(eid:any):Observable<string>{
    return this.http.get(this.baseUrl+"/findschedule/"+eid,{responseType:"text"});
   }

   
}
