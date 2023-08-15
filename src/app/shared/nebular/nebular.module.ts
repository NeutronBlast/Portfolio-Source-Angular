import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from "@nebular/theme";

const NEBULAR_MODULES = [
  CommonModule,
  NbCardModule
]

@NgModule({
  declarations: [],
  imports: [
    ...NEBULAR_MODULES
  ],
  exports: [
    ...NEBULAR_MODULES
  ]
})
export class NebularModule { }
