import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeRef = new FormGroup({
    id:new FormControl(),
    firstname:new FormControl(),
    lastname:new FormControl(),
    role:new FormControl(),
    emailid:new FormControl(),
    gender:new FormControl(),
    dob:new FormControl()
  })
  storeMsg :string =""
  constructor(public es:EmployeeService) { }

  ngOnInit(): void {
  }

  storeEmployee() {
    let employee = this.employeeRef.value;
    this.es.storeEmployee(employee).subscribe({
      next:(result:any)=>this.storeMsg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.employeeRef.reset();
  }



}
