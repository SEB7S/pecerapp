import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PezPage } from './pez.page';

const routes: Routes = [
  {
    path: '',
    component: PezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PezPageRoutingModule {}
