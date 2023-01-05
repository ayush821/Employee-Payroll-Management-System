import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddattendanceComponent } from './addattendance/addattendance.component';
import { AddleavedataComponent } from './addleavedata/addleavedata.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmployeeRetrieveComponent } from './employee-retrieve/employee-retrieve.component';
import { Login } from './login';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewattendanceComponent } from './viewattendance/viewattendance.component';
import { ViewsalaryComponent } from './viewsalary/viewsalary.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';


const routes: Routes = [
  {path:"login",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"adminHome",component:AdmindashboardComponent,children:[
    {path:"addEmployee",component:AddEmployeeComponent},
    {path:"findAllEmployee",component:EmployeeRetrieveComponent},
    {path:"addSalary",component:AddsalaryComponent},
    {path:"addAttendance",component:AddattendanceComponent},
    {path:"addSchedule",component:AddscheduleComponent},
    {path:"addLeavedata",component:AddleavedataComponent}
  ]},
  {path:"userHome",component:UserdashboardComponent},
    {path:"viewsalary",component:ViewsalaryComponent},
    {path:"viewschedule",component:ViewscheduleComponent},
    {path:"viewattendance",component:ViewattendanceComponent},
    {path:"updateEmployeebyuser",component:UpdateemployeeComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  

 ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
