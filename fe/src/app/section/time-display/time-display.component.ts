import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.less']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData;
  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  constructor() {
    console.log("inputData : ", this.inputData);
  }

  ngOnChanges(changes: SimpleChange) {
    
  }
  

  ngOnInit() {
    
  }

}
