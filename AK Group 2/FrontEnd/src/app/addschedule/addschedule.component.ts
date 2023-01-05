import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {

  scheduleRef = new FormGroup({
    sid:new FormControl(),
    eid:new FormControl(),
    date:new FormControl(),
    time:new FormControl(),
    task:new FormControl()
  })
  storeMsg :string =""
  constructor(public sc:ScheduleService) { }

  ngOnInit(): void {
  }

  storeSchedule() {
    let schedule = this.scheduleRef.value;
    this.sc.storeSchedule(schedule).subscribe({
      next:(result:any)=>this.storeMsg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.scheduleRef.reset();
  }

}
