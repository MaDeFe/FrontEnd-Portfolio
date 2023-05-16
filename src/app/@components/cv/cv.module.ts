import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CvComponent]
})
export class CvModule { }
