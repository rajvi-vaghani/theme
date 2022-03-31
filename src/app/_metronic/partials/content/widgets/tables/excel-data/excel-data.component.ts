import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-data',
  templateUrl: './excel-data.component.html',
  styleUrls: ['./excel-data.component.scss']
})
export class ExcelDataComponent implements OnInit {

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  title = 'Excel';
  userdata: any = []
  token = "adbad2c528827bb0e8dc85ff4b9646804f70dfcfe73e3d5d90f59018c19b1b03"
  apiUrl = "https://gorest.co.in/public/v2/comments"

  httpOptions = {
    headers: new HttpHeaders({
      "Authorization": "Bearer " + this.token
    })
  }


  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  constructor(private http: HttpClient, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    debugger
    console.log("data get")
    this.http.get(this.apiUrl, this.httpOptions).subscribe((res: any) => {
      this.userdata = res
      this.ref.detectChanges()
    })

  }
}
