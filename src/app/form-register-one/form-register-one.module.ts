import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormRegisterOnePage } from './form-register-one.page';

const routes: Routes = [
  {
    path: '',
    component: FormRegisterOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormRegisterOnePage]
})
export class FormRegisterOnePageModule {}
