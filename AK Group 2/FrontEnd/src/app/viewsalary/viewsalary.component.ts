import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-viewsalary',
  templateUrl: './viewsalary.component.html',
  styleUrls: ['./viewsalary.component.css']
})
export class ViewsalaryComponent implements OnInit {
  eid:number;
  esalary:string="";
  constructor(public ss:SalaryService) { }

  ngOnInit(): void {
  }
  viewsalary(eid:number){
    this.ss.viewsalary(eid).subscribe({
      next:(result:any)=>this.esalary=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

}
