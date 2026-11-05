
import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Vuelos } from './pages/vuelos/vuelos';
import { NoEncontrado } from './pages/no-encontrado/no-encontrado';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'vuelos', component: Vuelos },
  { path: '**', component: NoEncontrado }
];
