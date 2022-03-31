import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

abstract class ChangeDetectorRef {
  abstract markForCheck(): void
  abstract detach(): void
  abstract detectChanges(): void
  abstract checkNoChanges(): void
  abstract reattach(): void

  mark(){
    return this.markForCheck()
  }

  det(){
    return this.detach()
  }

  dechange(){
    return this.detectChanges
  }

  check(){
    return this.checkNoChanges
  }

  ret(){
    return this.reattach
  }
}

export class CustomServiceService {

  constructor(private httpclient: HttpClient) { }


  getUserData() {
    return this.httpclient.get(`${environment.crudApi}/user/get`)
  }

  addUserData(user: any) {
    return this.httpclient.post(`${environment.crudApi}/user/add`, user)
  }

  updateUserData(user: any) {
    return this.httpclient.post(`${environment.crudApi}/user/update`, user)
  }

  deleteUserData(id: string) {
    return this.httpclient.delete(`${environment.crudApi}/user/delete?id=${id}`)
  }
}
