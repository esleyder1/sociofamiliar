import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { niniosListComponent } from './components/ninios-list/ninios-list.component';
import { AddninioComponent } from './components/add-ninio/add-ninio.component';

const routes: Routes = [
  { path: '', redirectTo: 'ninios', pathMatch: 'full' },
  { path: 'ninios', component: niniosListComponent },
  { path: 'add', component: AddninioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
