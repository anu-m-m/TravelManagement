import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './package.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { ListPackageComponent } from './list-package/list-package.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    PackageComponent,
    AddPackageComponent,
    ListPackageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    PackageComponent
  ]
})
export class PackageModule { }
