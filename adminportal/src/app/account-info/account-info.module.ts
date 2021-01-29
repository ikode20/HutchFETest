import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccountInfoComponent } from './account-info.component';

const routes: Routes = [
  {
    path: '',
    component: AccountInfoComponent
  },
]

@NgModule({
  declarations: [
    AccountInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountInfoModule { }
