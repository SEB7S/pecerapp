import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PezPageRoutingModule } from './pez-routing.module';

import { PezPage } from './pez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PezPageRoutingModule
  ],
  declarations: [PezPage]
})
export class PezPageModule {}
