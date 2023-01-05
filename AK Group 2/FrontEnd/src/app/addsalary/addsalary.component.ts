import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-addsalary',
  templateUrl: './addsalary.component.html',
  styleUrls: ['./addsalary.component.css']
})
export class AddsalaryComponent implements OnInit {

  salaryRef = new FormGroup({
    salaryid:new FormControl(),
    eid:new FormControl(),
    month:new FormControl(),
    salary:new FormControl()
  })
  storeMsg :string =""
  constructor(public ss:SalaryService) { }

  ngOnInit(): void {
  }

  storeSalary() {
    let salary = this.salaryRef.value;
    this.ss.storeSalary(salary).subscribe({
      next:(result:any)=>this.storeMsg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.salaryRef.reset();
  }

}
