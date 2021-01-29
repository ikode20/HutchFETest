import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FusionCreditsComponent } from './fusion-credits.component';

const routes: Routes = [
  {
    path: '',
    component: FusionCreditsComponent
  },
]

@NgModule({
  declarations: [
    FusionCreditsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FusionCreditsModule { }
