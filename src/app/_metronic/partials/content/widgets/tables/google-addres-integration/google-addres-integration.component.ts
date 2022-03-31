import { Component,  OnInit } from '@angular/core';
import { FilterService } from 'primeng/api';
// const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCaKbVhcX_22R_pRKDYuNA7vox-PtGaDkI&libraries=places&callback=initMap";

declare const google: any;

@Component({
  selector: 'app-google-addres-integration',
  templateUrl: './google-addres-integration.component.html',
  styleUrls: ['./google-addres-integration.component.scss'],
  providers: [FilterService]
})
export class GoogleAddresIntegrationComponent implements OnInit {
  title = "CodeSandbox";
  
  // handleAddresschange(e:any) {
  //   console.log(e);
  // }
  userAddress: string = ''
  userLatitude: string = ''
  userLongitude: string = ''
  usercity:string = ''
  userstate:string = ''

  handleAddressChange(address: any) {
    debugger
    this.userAddress = address.formatted_address
    this.userLatitude = address.geometry.location.lat()
    this.userLongitude = address.geometry.location.lng()
    this.usercity = address.address_components[3].long_name
    this.userstate = address.name
  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
