import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { JsonTableRoutingModule } from './json-table-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JsonTableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class JsonTableModule { }
