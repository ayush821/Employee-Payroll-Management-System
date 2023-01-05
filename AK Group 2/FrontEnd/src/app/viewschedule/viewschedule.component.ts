import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent implements OnInit {

  eid:number;
  eschedule:string="";

  constructor(public sc:ScheduleService) { }

  ngOnInit(): void {
  }
  viewschedule(eid:number){
    this.sc.viewschedule(eid).subscribe({
      next:(result:any)=>this.eschedule=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }


}
