import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FuelComponent } from './fuel.component';

const routes: Routes = [
  {
    path: '',
    component: FuelComponent
  },
]

@NgModule({
  declarations: [
    FuelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FuelModule { }
