import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { beneficiariosListComponent } from './components/beneficiarios-list/beneficiarios-list.component';
import { AddbeneficiarioComponent } from './components/add-beneficiario/add-beneficiario.component';

const routes: Routes = [
  { path: '', redirectTo: 'beneficiarios', pathMatch: 'full' },
  { path: 'beneficiarios', component: beneficiariosListComponent },
  { path: 'add', component: AddbeneficiarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
