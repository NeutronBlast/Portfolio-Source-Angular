import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(h => h.HomeModule)
  }
];
