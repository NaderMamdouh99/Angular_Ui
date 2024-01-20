import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Icustomer } from '../interfaces/icustomer';
import { CustomerService } from '../services/customer.service';
import { PdfService } from '../services/pdf.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  edit:string = 'Search';
  /* ImterFace to Get Data From Json Server */
customers:Icustomer[]= [];
/* Inject Services CustomerService in Constructor To Use Functionalty in this Services (Dependence Injection)  */
/* Inject Services PdfService in Constructor To Use Functionalty in this Services (Dependence Injection)  */
constructor(private customerServices:CustomerService,private pdfService:PdfService){}
  ngOnInit(): void {
    /* Customer Services */
    this.customerServices.getall().subscribe({
      next:(data)=>{
        this.customers=data
      },
      error:(err)=>{
        console.log(`error`+ err);
      },
      complete:()=>{}
    })
  }
  /* PDF Services */
  downloadPdf() {
    this.pdfService.generatePdf();
  }
  /* Value for Check Box */
  checked:boolean = true;
}
