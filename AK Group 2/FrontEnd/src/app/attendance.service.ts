import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseUrl:string ="http://localhost:9090/attendance"
  constructor(public http:HttpClient) { }

  storeAttendance(attendance:any):Observable<string> {
    return this.http.post(this.baseUrl+"/storeAttendance",attendance,{responseType:"text"});
  }

  viewattendance(eid:any):Observable<string>{
    return this.http.get(this.baseUrl+"/findattendance/"+eid,{responseType:"text"});
   }
}
