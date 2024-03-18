import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './svg/logo/logo.component';
import { CompanyNameComponent } from './svg/company-name/company-name.component';

@NgModule({
  declarations: [
    LogoComponent,
    CompanyNameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    CompanyNameComponent
  ]
})
export class SharedModule { }
