import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule
} from "@nebular/theme";

const NEBULAR_MODULES = [
  CommonModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbContextMenuModule
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
