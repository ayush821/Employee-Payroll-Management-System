import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.css']
})
export class AddattendanceComponent implements OnInit {

  attendanceRef = new FormGroup({
    aid:new FormControl(),
    eid:new FormControl(),
    date:new FormControl(),
    status:new FormControl()
  })
  storeMsg :string =""
  constructor(public as:AttendanceService) { }

  ngOnInit(): void {
  }

  storeAttendance() {
    let attendance = this.attendanceRef.value;
    this.as.storeAttendance(attendance).subscribe({
      next:(result:any)=>this.storeMsg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.attendanceRef.reset();
  }

}
