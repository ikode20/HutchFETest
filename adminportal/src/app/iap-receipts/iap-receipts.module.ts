import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IapReceiptsComponent } from './iap-receipts.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IapReceiptsComponent
  },
]

@NgModule({
  declarations: [
    IapReceiptsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class IapReceiptsModule { }
