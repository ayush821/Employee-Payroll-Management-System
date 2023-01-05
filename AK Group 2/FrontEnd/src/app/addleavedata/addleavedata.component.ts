import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LeavedataService } from '../leavedata.service';

@Component({
  selector: 'app-addleavedata',
  templateUrl: './addleavedata.component.html',
  styleUrls: ['./addleavedata.component.css']
})
export class AddleavedataComponent implements OnInit {

  leavedataRef = new FormGroup({
    lid:new FormControl(),
    eid:new FormControl(),
    fdate:new FormControl(),
    tdate:new FormControl(),
    reason:new FormControl()
  })
  storeMsg :string =""
  constructor(public ls:LeavedataService) { }

  ngOnInit(): void {
  }

  storeLeavedata() {
    let leavedata = this.leavedataRef.value;
    this.ls.storeLeavedata(leavedata).subscribe({
      next:(result:any)=>this.storeMsg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.leavedataRef.reset();
  }

}
