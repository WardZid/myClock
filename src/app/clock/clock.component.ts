import { Component , OnInit} from '@angular/core';
import {formatDate } from '@angular/common';
// import {Subscription, timer} from 'rxjs';  

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  public theTime=new Date();
  public timeString='';
  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    },100);
  }

  updateTime(): void{
      this.theTime=new Date();
      this.timeString=formatDate(this.theTime,'dd-MM-yyyy hh:mm:ss a','en-US', '+0530');
  }
}