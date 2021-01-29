import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SocialAccountsComponent } from './social-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: SocialAccountsComponent
  },
]

@NgModule({
  declarations: [
    SocialAccountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SocialAccountsModule { }
