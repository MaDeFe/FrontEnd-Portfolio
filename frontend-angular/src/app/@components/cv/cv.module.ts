import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';



@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CvComponent]
})
export class CvModule { }
