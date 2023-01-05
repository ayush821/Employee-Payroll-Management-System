import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  employees:Array<Employee>=[];
  employee1:Employee;
  employeeRef = new FormGroup({
    id:new FormControl(),
    firstname:new FormControl(),
    lastname:new FormControl(),
    role:new FormControl(),
    emailid:new FormControl(),
    gender:new FormControl(),
    dob:new FormControl()
  })
  constructor(public es:EmployeeService) { }
  ngOnInit(): void {
    
  }
  id:number=2;
  flag:boolean = false;
  gender:string="";
  firstname:string ="";
  lastname:string="";
  emailid:string="";
  dob:string="";
  
  findEmployeeId(id:number) {
    this.es.findEmployeeId(this.id).subscribe({
      next:(result:any)=>this.employee1=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

  }
  
  updateEmployee(employee:any){
    this.id=employee.id;
    this.flag= true;
    this.dob=employee.dob
    this.firstname=employee.firstname;
    this.lastname=employee.lastname;
    this.dob=employee.dob;
    this.emailid=employee.emailid;
    this.gender=employee.gender;
}

updateEmployeebyuser(id:number){
 // this.findEmployeeId(id)
  let employee = this.employeeRef.value;
  //{id:this.employee1.id,firstname:this.employee1.firstname,lastname:this.employee1.lastname,dob:this.employee1.dob,gender:this.employee1.gender};
  this.updateEmployee(employee);
  this.es.updateEmployeebyuser(employee).subscribe({
    next:(result:any)=>console.log(result),
    error:(error:any)=>console.log(error),
    complete:()=>{
        "Completed"   
    }
  })
  this.flag=false;
}
}
