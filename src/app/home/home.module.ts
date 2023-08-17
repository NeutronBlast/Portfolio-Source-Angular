import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import { WorkComponent } from './work/work.component';
import { EducationalProjectsComponent } from './educational-projects/educational-projects.component';

@NgModule({
    declarations: [
        HomeComponent,
        WorkComponent,
        EducationalProjectsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ],
    exports: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
