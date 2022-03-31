import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tables-widget11',
  templateUrl: './tables-widget11.component.html'
})
export class TablesWidget11Component implements OnInit {
  userForm! : FormGroup
  hobby: any = []
  loadImage: any = []
  userData: any = []
  newData:any = []
  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router : Router , private ref : ChangeDetectorRef) {
    this.userForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      hobbies: [''],
      gender: [''],
      city: [''],
      image: [''],
      age: ['', Validators.required],
      id: []
    })
  }

  uploadImage($event: any) {
    this.loadImage = $event.target.files[0]
  }

  userHobbies($event: any) {
    const value = $event.target.value
    if (this.hobby.find((x: any) => x === value)) {
      this.hobby = this.hobby.filter((x: any) => x !== value)
    }
    else {
      this.hobby.push(value)
    }
  }
  ngOnInit(): void {
    this.getDetails()
  }
  
  getDetails() {
    this.http.get(`${environment.crudApi}/user/get`).subscribe((res: any) => {
      this.userData = res.data
      this.ref.detectChanges()
    });
    
  }

  submitData() {
    if (this.userForm.invalid) {
      return
    }
    if (this.userForm.value.id) {
      this.updateData()
    }
    else {
      this.addData()
    }
  }

  editData(user: any) {
    this.userForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      city: user.city,
      age: user.age,
      id: user._id,
    })
    if (user.hobbies) {
      this.hobby = user.hobbies.split(',')
    }
  }

  addData() {
   
    const formData = new FormData()
    formData.append("firstName", this.userForm.value.firstName)
    formData.append("lastName", this.userForm.value.lastName)
    formData.append("gender", this.userForm.value.gender)
    formData.append("city", this.userForm.value.city)
    formData.append("age", this.userForm.value.age)
    formData.append("id", this.userForm.value.id)
    formData.append("hobbies", this.hobby.join(','))
    formData.append('userImage', this.loadImage)

    this.http.post(`${environment.crudApi}/user/add`, formData).subscribe((res: any) => {
      if (res.isSuccess) {
        this.getDetails();
        this.loadImage = null
        this.userForm.reset()
        this.hobby = []
      }
      else {
        alert(res.message)
      }
    });
  }

  updateData() {
    const formdata = new FormData()
    formdata.append("firstName", this.userForm.value.firstName)
    formdata.append("lastName", this.userForm.value.lastName)
    formdata.append("gender", this.userForm.value.gender)
    formdata.append("hobbies", this.hobby.join(','))
    formdata.append("city", this.userForm.value.city)
    formdata.append("age", this.userForm.value.age)
    formdata.append("userImage", this.loadImage)
    formdata.append("id", this.userForm.value.id)

    this.http.post(`${environment.crudApi}/user/update`, formdata).subscribe((res: any) => {
      if (res.isSuccess) {
        this.getDetails()
        this.userForm.reset()
        this.hobby = []
      }
      else {
        alert(res.message)
      }
    })
  }

  deleteData(id: string) {
    if (confirm("are you sure want to delete this data..?")) {
      this.http.delete(`${environment.crudApi}/user/delete?id=${id}`).subscribe((res: any) => {
        this.getDetails()
      })
    }
  }
  
  show(id:string){
    // debugger
    this.http.get(`${environment.crudApi}/user/get-user-by-id?id=${id}`).subscribe((res:any)=> {
      this.newData = res.data
      // this.router.navigateByUrl('/job')
      console.log("newdata" , [this.newData])
      console.log("new", this.newData)
    })
  }
}
