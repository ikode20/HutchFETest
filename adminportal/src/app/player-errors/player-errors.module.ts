import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OfferReceiptsComponent } from '../offer-receipts/offer-receipts.component';
import { PlayerErrorsComponent } from './player-errors.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerErrorsComponent
  },
]

@NgModule({
  declarations: [
    PlayerErrorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayerErrorsModule { }
