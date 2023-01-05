import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.css']
})
export class ViewattendanceComponent implements OnInit {

  eid:number;
  eattendance:string="";
  constructor(public ss:AttendanceService) { }

  ngOnInit(): void {
  }
  viewattendance(eid:number){
    this.ss.viewattendance(this.eid).subscribe({
      next:(result:any)=>this.eattendance=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

}
