import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.less']
})
export class StopwatchComponent implements OnInit {

  present = 'junwoo';

  constructor(
    private router:Router,
    private pageToggleService: PageToggleService
    ) { 
    
  }

  goClock() {
    // this.router.navigateByUrl('/clock');
    this.pageToggleService.goPage('/clock');
  }

  startTime($event) {
    // console.log("start 버튼 눌렀음 : ", $event);
    this.present = $event;
  }

  targetFunc($event) {
    console.log("자식으로부터 전달받은 $event : ", $event);
  }
  
  ngOnInit() {
  }

}
