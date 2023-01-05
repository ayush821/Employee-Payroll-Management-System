import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeRetrieveComponent } from './employee-retrieve/employee-retrieve.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { AddattendanceComponent } from './addattendance/addattendance.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { AddleavedataComponent } from './addleavedata/addleavedata.component';
import { ViewsalaryComponent } from './viewsalary/viewsalary.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { ViewattendanceComponent } from './viewattendance/viewattendance.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    AddEmployeeComponent,
    EmployeeRetrieveComponent,
    AddsalaryComponent,
    AddattendanceComponent,
    AddscheduleComponent,
    AddleavedataComponent,
    ViewsalaryComponent,
    ViewscheduleComponent,
    ViewattendanceComponent,
    UpdateemployeeComponent,
    ChangepasswordComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
