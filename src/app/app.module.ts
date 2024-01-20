import { QRCodeModule } from 'angularx-qrcode';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeErrorCorrectionLevel } from 'qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http'
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PdfService } from './services/pdf.service';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PaginatorModule } from 'primeng/paginator';




@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxApexchartsModule,
    InputTextModule,
    QRCodeModule,
    HttpClientModule,
    TableModule,
    TooltipModule,
    InputSwitchModule,
    PaginatorModule
  ],
  providers: [CustomerService,PdfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
