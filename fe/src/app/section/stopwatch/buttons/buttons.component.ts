import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.less']
})
export class ButtonsComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<string>();

  @Output() testEvent = new EventEmitter();

  constructor() { }

  // count() {
  //   this.clickEvent.emit('start');
  // }
  executeButton(command) {
    this.clickEvent.emit(command);
  }

  iAmStop() {
    // console.log('$event : ', $event);
    this.testEvent.emit('나를 전달해죠');
  }

  ngOnInit() {
  }

}
