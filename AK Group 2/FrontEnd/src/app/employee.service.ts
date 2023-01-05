import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl:string ="http://localhost:9090/employee"
  constructor(public http:HttpClient) { }

  storeEmployee(employee:any):Observable<string> {
    return this.http.post(this.baseUrl+"/storeEmployee",employee,{responseType:"text"});
  }
  updateEmployee(employee:any):Observable<string> {
    return this.http.patch(this.baseUrl+"/updateEmployee",employee,{responseType:"text"});
  }

  findAllEmployee():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl+"/findAllEmployee");
  }

  deleteEmployeeById(id:number):Observable<string> {
    return this.http.delete(this.baseUrl+"/deleteEmployee/"+id,{responseType:"text"});
  }

  updateEmployeebyuser(employee:any):Observable<string> {
    return this.http.patch(this.baseUrl+"/updateEmployeebyuser",employee,{responseType:"text"});

}

findEmployeeId(id:number):Observable<Employee> {
  return this.http.get<Employee>(this.baseUrl+"/findEmployeeId"+id);
}
}