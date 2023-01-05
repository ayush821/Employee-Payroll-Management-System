import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salary } from './salary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

   
    baseUrl:string ="http://localhost:9090/salary"
    constructor(public http:HttpClient) { }
  
    storeSalary(salary:any):Observable<string> {
      return this.http.post(this.baseUrl+"/storeSalary",salary,{responseType:"text"});
    }

  //   findSalaryById(salaryid:number):Observable<string> {
  //     return this.http.get(this.baseUrl+"/findSalaryById/"+salaryid,{responseType:"text"});
  //  }
// public findSalaryById(eid:String):Observable<Salary[]>{
//   return this.http.get<Salary[]>(`${this.baseUrl}/${eid}`);
  
// }
     viewsalary(eid:any):Observable<string>{
      return this.http.get(this.baseUrl+"/findsalary/"+eid,{responseType:"text"});
     }

     
}
