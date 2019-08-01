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

  timeInterval;

  constructor() {
    console.log("inputData : ", this.inputData);
  }

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  // ngOnChanges(changes: SimpleChange) {
  //   for(let propName in changes) {
  //     if(propName === 'inputData') {
  //       if(changes[propName].currentValue === 'start') {
  //         this.timeStart();
  //       }
  //       if(changes[propName].currentValue === 'stop') {
  //         this.timeStop();
  //       }
  //       if(changes[propName].currentValue === 'reset') {
  //         this.timeReset();
  //       }
        
  //     }
  //   }
  // }
  

  ngOnInit() {
    
  }

}
