import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratePageRoutingModule } from './generate-page-routing.module';
import { GeneratePageComponent } from './generate-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GeneratePageComponent
  ],
  imports: [
    CommonModule,
    GeneratePageRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class GeneratePageModule { }
