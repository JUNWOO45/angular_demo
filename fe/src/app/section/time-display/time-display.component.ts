import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.less']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData : string;
  test = 1;

  constructor() {
    console.log(this.inputData);
  }
  

  ngOnInit() {
    
  }

}
