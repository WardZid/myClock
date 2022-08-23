import { Component } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {

  theTime=new Date();
  timeString='';
  constructor() { 
    this.timeString=formatDate(this.theTime,'dd-MM-yyyy hh:mm:ss a','en-US', '+0530');
  }

}
