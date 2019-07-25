import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.less']
})
export class ButtonsComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }

  count() {

    this.clickEvent.emit(123123);
  }

  ngOnInit() {
  }

}
