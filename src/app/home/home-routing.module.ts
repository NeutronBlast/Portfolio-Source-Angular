import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {WorkComponent} from "./work/work.component";
import {EducationalProjectsComponent} from "./educational-projects/educational-projects.component";
import {HomeContentComponent} from "./home-content/home-content.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeContentComponent,
      },
      {
        path: 'work',
        component: WorkComponent,
      },
      {
        path: 'educational-projects',
        component: EducationalProjectsComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
