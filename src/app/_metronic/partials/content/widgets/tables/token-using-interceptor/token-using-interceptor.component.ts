import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InterceptorServiceService } from './interceptor-service.service';

@Component({
  selector: 'app-token-using-interceptor',
  templateUrl: './token-using-interceptor.component.html',
  styleUrls: ['./token-using-interceptor.component.scss'],
  providers: [ToastrService]
})
export class TokenUsingInterceptorComponent implements OnInit {


  userData: any = []
  apiUrl = "https://iris-api.mycodelibraries.com/api/User"

  loginform!: FormGroup
  submitted: boolean = false
  loading: boolean = false
  returnUrl!: any
  constructor(private httpclient: HttpClient, private formbuilder: FormBuilder, private service: InterceptorServiceService, private toasteservice: ToastrService, private router: Router, private ref: ChangeDetectorRef) {
    this.loginform = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
    this.getUserData()
  }


  getUserData() {
    // this.httpclient.get(this.apiUrl + "/GetAllUsers").subscribe((res: any) => {
    //   this.userData = res.responseData
    //   this.ref.detectChanges()
    // })
    this.service.getData().subscribe((res:any) => {
      console.log("res", res)
    })
  }


  submit() {
    this.submitted = true
    if (this.loginform.invalid) {
      return
    }

    this.loading = true
    this.service.login(this.loginform.value.email, this.loginform.value.password).subscribe((res: any) => {
      if (res.isSuccess) {
        localStorage.setItem('userInfo', JSON.stringify({
          token: res.responseData.token
        }))
        this.toasteservice.success(res.message)
        this.router.navigate(['/crafted/widgets/interceptor-crud'])
      }
      else {
        this.submitted = false
        this.loading = false
        this.toasteservice.error(res.message)
      }
    })
  }

}
