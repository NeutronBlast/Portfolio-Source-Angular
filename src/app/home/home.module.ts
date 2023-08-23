import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import { WorkComponent } from './work/work.component';
import { EducationalProjectsComponent } from './educational-projects/educational-projects.component';
import { ProjectsSummaryComponent } from './projects-summary/projects-summary.component';

@NgModule({
    declarations: [
        HomeComponent,
        WorkComponent,
        EducationalProjectsComponent,
        ProjectsSummaryComponent,
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
