import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-user-data-grid',
  templateUrl: './user-data-grid.component.html',
  styleUrls: ['./user-data-grid.component.scss'],
  providers: [ConfirmationService,PrimeNGConfig]
})
export class UserDataGridComponent implements OnInit {

  userForm!: FormGroup
  userData: any = []
  userRole: any = []
  apiUrl = "https://iris-api.mycodelibraries.com/api/User"
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjExMDYiLCJFbWFpbCI6ImFkbWluQG1haWwuY29tIiwiVXNlciI6IkFkbWluaXN0cmF0b3IiLCJuYmYiOjE2NDg0NjM3MTQsImV4cCI6MTY0OTA2ODUxNCwiaWF0IjoxNjQ4NDYzNzE0fQ.mIRSFmOnLk_HPKpGwhBzb80dvShaUlWBoEiXm63OS8M"

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  }

  constructor(private http: HttpClient, private ref: ChangeDetectorRef, private fb: FormBuilder,private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private router: Router) {
    this.userForm = this.fb.group({
      id: [],
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: [''],
      roleId: [''],
      userRole: []
    })
  }

  
  ngOnInit(): void {
    this.getData()
  }


  getData() {
    this.http.get(this.apiUrl + '/GetAllUsers', this.httpOptions).subscribe((res: any) => {
      this.userData = res.responseData
      this.ref.detectChanges()
      // console.log("userdata" , this.userData)
    })
  }

  editData(payload: any) {
    this.userForm.patchValue({
      id: payload.id,
      fullName: payload.fullName,
      email: payload.email,
      mobileNumber: payload.mobileNumber,
      roleId: payload.role.id
    })
  }

  addData() {
    debugger
    const value = {
      "id": this.userForm.value.id,
      "fullName": this.userForm.value.fullName,
      "email": this.userForm.value.email,
      "mobileNumber": this.userForm.value.mobileNumber,
      "roleId": this.userForm.value.roleId,
      "userRole" : this.userRole
    }
    this.http.post(this.apiUrl + "/CreateUser", value, this.httpOptions).subscribe((res: any) => {
      // console.log("res", res)
      if (res.isSuccess) {
        this.getData()
        this.userRole = []
        this.userForm.reset()
        this.ref.detectChanges()
      }
      else {
        alert("data not added")
      }
    })
  }

  updateData() {
    debugger
    const value = {
      "id": this.userForm.value.id,
      "fullName": this.userForm.value.fullName,
      "email": this.userForm.value.email,
      "mobileNumber": this.userForm.value.mobileNumber,
      "roleId": this.userForm.value.roleId,
      "userRole" : this.userRole
    }
    this.http.post(this.apiUrl + "/UpdateUser", value, this.httpOptions).subscribe((res: any) => {
      // console.log("res", res)
      if (res.isSuccess) {
        this.getData()
        this.userRole = []
        this.userForm.reset()
        this.ref.detectChanges()
        alert("data update successfully")
      }
      else {
        alert("data not added")
      }
    })
  }


  submitData() {
    if(this.userForm.value.id){
      this.updateData()
    }
    else{
      this.addData()
    }
  }

  deleteData(id: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.http.delete(this.apiUrl + "/DeleteUser" + "/" + id, this.httpOptions).subscribe((res: any) => {
          this.userData = this.userData.filter((item: any) => item.id !== id);
          this.ref.detectChanges()
        })
      }
  });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/crafted/widgets/sign-with-google']);
  }
}
