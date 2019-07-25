import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less']
})
export class SectionComponent implements OnInit {

  present = 'junwoo'
  constructor() { }

  startTime(time) {
    this.present = time;
  }
  
  ngOnInit() {
  }

}
