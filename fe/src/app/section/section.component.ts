import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less']
})
export class SectionComponent implements OnInit {

  present = 'junwoo';

  constructor() { 

  }

  

  startTime($event) {
    console.log("start 버튼 눌렀음 : ", $event);
    this.present = $event;
  }

  targetFunc($event) {
    console.log("자식으로부터 전달받은 $event : ", $event);
  }
  
  ngOnInit() {
  }

}
