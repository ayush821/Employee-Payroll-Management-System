import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-retrieve',
  templateUrl: './employee-retrieve.component.html',
  styleUrls: ['./employee-retrieve.component.css']
})
export class EmployeeRetrieveComponent implements OnInit {

  employees:Array<Employee>=[];
  constructor(public es:EmployeeService) { }

  ngOnInit(): void {
    this.findAllEmployee();
  }
  flag:boolean = false;
  id:number =0;
  firstname:string ="";
  lastname:string="";
  emailid:string="";
  role:string="";


  findAllEmployee() {
    this.es.findAllEmployee().subscribe({
      next:(result:any)=>this.employees=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

  deleteEmployee(id:number){
    //console.log(pid)
    this.es.deleteEmployeeById(id).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
          this.findAllEmployee();   
      }
    })
  }

  updateEmployee(employee:any){
      this.flag= true;
      this.id=employee.id;
      this.firstname=employee.firstname;
      this.lastname=employee.lastname;
      this.role=employee.role;
      this.emailid=employee.emailid;
  }

  updateDataFromDb(){
    let employee = {id:this.id,firstname:this.firstname,lastname:this.lastname,role:this.role,emailid:this.emailid};
    this.es.updateEmployee(employee).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
          this.findAllEmployee();   
      }
    })
    this.flag=false;
  }

}
