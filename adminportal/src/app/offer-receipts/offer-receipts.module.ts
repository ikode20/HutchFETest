import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OfferReceiptsComponent } from './offer-receipts.component';

const routes: Routes = [
  {
    path: '',
    component: OfferReceiptsComponent
  },
]

@NgModule({
  declarations: [
    OfferReceiptsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class OfferReceiptsModule { }
