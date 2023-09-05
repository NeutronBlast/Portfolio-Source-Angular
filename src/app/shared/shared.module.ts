import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NebularModule } from "./nebular/nebular.module";
import {NbLayoutModule, NbMenuModule, NbThemeModule} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NebularModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule,
    NebularModule
  ]
})
export class SharedModule { }
