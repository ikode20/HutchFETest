import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FtueProgressComponent } from './ftue-progress.component';

const routes: Routes = [
  {
    path: '',
    component: FtueProgressComponent
  },
]

@NgModule({
  declarations: [
    FtueProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FtueProgressModule { }
