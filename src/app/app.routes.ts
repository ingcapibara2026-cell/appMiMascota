import { Routes } from '@angular/router';
import { Nosotros } from './pages/nosotros/nosotros';
import { Servicios } from './pages/servicios/servicios';

export const routes: Routes = [
  { path: '', redirectTo: 'nosotros', pathMatch: 'full' },
  { path: 'nosotros', component: Nosotros },
  { path: 'servicios', component: Servicios },
  { path: '**', redirectTo: 'nosotros' }
];
