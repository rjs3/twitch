import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadingComponent } from './preloading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PreloadingComponent],
  exports: [PreloadingComponent]
})
export class PreloadingModule { }
