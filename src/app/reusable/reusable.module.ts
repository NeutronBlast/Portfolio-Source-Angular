import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SharedModule} from "../shared/shared.module";
import { AnimationsDirective } from './animations/animations.directive';
import { ScrollDetectorDirective } from './animations/scroll-detector.directive';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AnimationsDirective,
    ScrollDetectorDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AnimationsDirective,
    ScrollDetectorDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReusableModule { }
