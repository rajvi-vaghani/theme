import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { GridServiceService } from './grid-service.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenCrudService } from '../../token-crud.service';

interface Product {
  id?: any;
  user_id?: any;
  title?: any;
  body?: any;
}

@Component({
  selector: 'app-server-grid',
  templateUrl: './server-grid.component.html',
  styleUrls: ['./server-grid.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ServerGridComponent implements OnInit {
  @ViewChild('dt') dt: any
  public data: Object[];
  public initialSort: Object;
  public pageSettings: Object;

  id: any = ""

  userId: any = []

  productDialog: boolean;

  products: Product[];

  product: Product;

  selectedProducts: Product[];

  submitted: boolean;

  saveChange: boolean

  saveproduct: boolean

  getUser_id: any

  token: any = "adbad2c528827bb0e8dc85ff4b9646804f70dfcfe73e3d5d90f59018c19b1b03"
  url = "https://gorest.co.in/public/v2/posts"
  httpOptions = {
    headers: new HttpHeaders({
      // "header key " : "header value"
      'Authorization': 'Bearer ' + this.token
    })
  }

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private gridservice: GridServiceService, private http: HttpClient, private ref: ChangeDetectorRef, private activateroute: ActivatedRoute, private userService: TokenCrudService, private router: Router) { }

  ngOnInit() {
    this.getUser_id = this.activateroute.snapshot.queryParams['id']
    console.log("quaprams",this.getUser_id)

    if(this.getUser_id){
      this.getPostadetails()
    }
    else{
      this.getPostData()
    }

  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
    this.saveproduct = true
    this.saveChange = false
  }

  getPostadetails() {
    
    this.http.get(`${environment.userApiGoRest}?user_id=${this.getUser_id}`, this.httpOptions).subscribe((res: any) => {
      this.userId = res
      console.log("userid", this.userId)
      this.ref.detectChanges()
       // this.http.get(`${environment.userApiGoRest} , this.httpOptions).subscribe((res:any) => {
      // this.userId = this.userId.filter((x:any) => x.user_id === this.getUser_id)
      // console.log("filter userid " , this.userId)
    })
  }

  getPostData() {
    this.http.get(`${environment.userApiGoRest}`, this.httpOptions).subscribe((res: any) => {
      this.userId = res
      this.ref.detectChanges()
    })
  }

  editUser(id: any) {
    this.productDialog = true
    this.saveChange = true
    this.saveproduct = false

    this.gridservice.findData(id)
      .subscribe((data: Product) => {
        this.product = data;
      });

  }

  adduser() {
    debugger
    const param = this.activateroute.snapshot.queryParams['id']
    console.log("param" , param)
    const value = {
      "user_id" : param,
      "title": this.product.title,
      "body": this.product.body
    }
      console.log("getuserid" , this.getUser_id)
      this.gridservice.create(value).subscribe((res: any) => {
      this.getPostadetails()
    })

  }

  updateUser() {
    const param = this.activateroute.snapshot.queryParams['id']
    console.log("param" , param)
    const value = {
      "user_id" : param,
      "title": this.product.title,
      "body": this.product.body
    }
    this.gridservice.update(value, this.product.id).subscribe(res => {
      this.ref.detectChanges()
      this.getPostadetails()
    })

    // == for user data ==
    // this.userService.updateUser(value , this.product.id).subscribe(res => {
    //   this.userId = []
    //   this.getUserApiData()
    //   // this.ref.detectChanges()
    // })
  }

  saveProduct() {
    this.submitted = true
    this.adduser()
    this.productDialog = false
  }

  savechange() {
    this.submitted = true
    this.updateUser()
    this.productDialog = false
  }

  deleteUser(id: string) {
    console.log("delete")
    debugger
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.gridservice.delete(id).subscribe(res => {
          this.userId = this.userId.filter((item: any) => item.id !== id);
          this.ref.detectChanges()
        })
      }
    })
  }

  filterId($event: any) {
    this.gridservice.searchGrid(`${environment.userApiGoRest}?id=${$event.target.value}`).subscribe((data: Product[]) => {
      this.userId = data;
      this.ref.detectChanges()
    })
  }

  filterUser_id($event: any) {
    this.gridservice.searchGrid(`${environment.userApiGoRest}?user_id=${$event.target.value}`).subscribe((data: Product[]) => {
      this.userId = data;
      this.ref.detectChanges()
    })
  }
  filterTitle($event: any) {
    this.gridservice.searchGrid(`${environment.userApiGoRest}?title=${$event.target.value}`).subscribe((data: Product[]) => {
      this.userId = data;
      this.ref.detectChanges()
    })
  }
  filterBody($event: any) {
    this.gridservice.searchGrid(`${environment.userApiGoRest}?body=${$event.target.value}`).subscribe((data: Product[]) => {
      this.userId = data;
      this.ref.detectChanges()
    })
  }
}

  // filter($event: any) {
  //   this.gridservice.searchGrid(`${environment.userApiGoRest}?id=${$event.target.value}`).subscribe((data: Product[]) => {
  //     this.userId = data;
  //     this.ref.detectChanges()
  //   })
  // }

  // search only for api get...api also get like..

  // filterId($event: any) {
  //     this.http.get(`${environment.userApiGoRest}?id=${$event.target.value}`).subscribe((data: any) => {
  //       this.userId = data;
  //       this.ref.detectChanges()
  //     })
  //   }