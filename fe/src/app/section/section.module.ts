import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SectionComponent,
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild()
  ],
  exports: [
    SectionComponent
  ]
})
export class SectionModule { }
