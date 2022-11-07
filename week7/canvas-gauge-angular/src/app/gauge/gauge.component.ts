import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {progressPie, registerForMouseAndTouch} from '../../../../canvas-gauge-sketch/gauge.js';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit, AfterViewInit {

  @ViewChild('progressView', {static: false, read: ElementRef}) progressView!: ElementRef;

  constructor() {
  }


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    console.log(this.progressView);
    progressPie(this.progressView.nativeElement, 0.2, true);


    registerForMouseAndTouch(this.progressView.nativeElement);
  }

}



