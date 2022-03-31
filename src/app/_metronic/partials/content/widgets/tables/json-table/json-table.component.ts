import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenCrudService } from '../../token-crud.service';
import * as XLSX from 'xlsx';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}
const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548
  }
]


@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})

export class JsonTableComponent implements OnInit {
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  title = 'Excel';
  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries: Country[];
  newData:any = []
  userData:any = []

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  constructor(private http : HttpClient, private ref : ChangeDetectorRef ,private router: Router, private activeroute : ActivatedRoute, private service : TokenCrudService) { 
  
  }

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.http.get(`${environment.apiEndPoint}`).subscribe((res:any)=>{
      this.userData = res
      this.ref.detectChanges()
    })
  }

}
