import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeavedataService {

  baseUrl:string ="http://localhost:9090/leavedata"
  constructor(public http:HttpClient) { }

  storeLeavedata(leavedata:any):Observable<string> {
    return this.http.post(this.baseUrl+"/storeLeavedata",leavedata,{responseType:"text"});
  }
}
