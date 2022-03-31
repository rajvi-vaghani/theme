import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { TokenCrudService } from '../../token-crud.service';

interface USERDATA {
    id?: any;
    name?: any;
    email?: any;
    status?: any;
    gender?: any;
}

@Component({
    selector: 'app-token-crud',
    templateUrl: './token-crud.component.html',
    styleUrls: ['./token-crud.component.scss'],
    providers: [ConfirmationService]
})
export class TokenCrudComponent implements OnInit {
    @ViewChild('dt2') dt2: any
    @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
    title = 'Excel';
    UserData: any = []
    NewUser: any = []
    userForm!: FormGroup
    id: any = ""
    error: any = ""

    msgs: Message[] = [];

    productDialog: boolean;

    product: USERDATA;

    submitted: boolean;

    saveChange: boolean

    saveproduct: boolean

 

    constructor(private service: TokenCrudService, private ref: ChangeDetectorRef, private confirmservice: ConfirmationService, private http: HttpClient,
        private router : Router, private activateroute: ActivatedRoute) {
    }
    

    ngOnInit(): void {
        this.getUserData()
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
        this.saveproduct = true
        this.saveChange = false
    }

    getUserData() {
        this.service.getUser().subscribe((res: any) => {
            this.UserData = res
            this.ref.detectChanges()
        })
    }

    editData(id: string) {
        this.productDialog = true
        this.saveChange = true
        this.saveproduct = false
        this.service.findUser(id).subscribe((data: any) => {
            this.product = data
        })
    }

    addData(){
        const value = { 
            "name": this.product.name,
            "email": this.product.email,
            "gender": this.product.gender,
            "status": this.product.status 
        }
        this.service.addUser(value).subscribe((res:any) => {
            this.getUserData()
            this.ref.detectChanges()
        })
    }

    updateData() {
        const value = {
            "name": this.product.name,
            "email": this.product.email,
            "gender": this.product.gender,
            "status": this.product.status
        }
        debugger
        this.service.updateUser(value, this.product.id).subscribe((res: any) => {
            this.getUserData()
            this.ref.detectChanges()
        })
    }


    submit() {
        this.submitted = true
        this.addData()
        this.productDialog = false
    }

    savechange() {
        this.submitted = true
        this.updateData()
        this.productDialog = false
    }

    deleteData(id: any) {
        console.log("delete")
        debugger
        this.confirmservice.confirm({
            message: 'Are you sure you want to delete?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
              this.service.deleteUser(id).subscribe(res => {
                this.UserData = this.UserData.filter((item: any) => item.id !== id);
                this.ref.detectChanges()
              })
            }
          })
    }

    postData(id:any){
        // this.NewUser = this.UserData.filter((x:any) => x.id === id)
        // // console.log("id in user  ", id)

        this.router.navigate(['/crafted/widgets/server-grid'] , {
            queryParams : {
                id : id
            }
        })

        // this.router.navigateByUrl(`/crafted/widgets/server-grid/${id}`)
    }

    filterId($event:any){
        this.http.get(`${environment.userGoRest}?id=${$event.target.value}`).subscribe((res:any) => {
            this.UserData = res
            this.ref.detectChanges()
        })
    }
    filterName($event:any){
        this.http.get(`${environment.userGoRest}?name=${$event.target.value}`).subscribe((res:any) => {
            this.UserData = res
            this.ref.detectChanges()
        })
    }
    filterEmail($event:any){
        this.http.get(`${environment.userGoRest}?email=${$event.target.value}`).subscribe((res:any) => {
            this.UserData = res
            this.ref.detectChanges()
        })
    }
    filterGender($event:any){
        this.http.get(`${environment.userGoRest}?gender=${$event.target.value}`).subscribe((res:any) => {
            this.UserData = res
            this.ref.detectChanges()
        })
    }
    filterStatus($event:any){
        this.http.get(`${environment.userGoRest}?status=${$event.target.value}`).subscribe((res:any) => {
            this.UserData = res
            this.ref.detectChanges()
        })
    }
}
