import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input, OnDestroy,
  Output,
  ViewChild
} from '@angular/core';

import {progressPie, registerForMouseAndTouch} from './gauge.js';
import {BehaviorSubject, combineLatest, delay, distinctUntilChanged, map, Subscription, tap} from "rxjs";
import {GaugeStyle} from "./gauge-style";

@Component({
  selector: 'app-gauge-clean',
  templateUrl: './gauge-clean.component.html',
  styleUrls: ['./gauge-clean.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaugeCleanComponent implements AfterViewInit, OnDestroy {

  private subscription?: Subscription;

  private _progress$ = new BehaviorSubject(0);
  private _threshold$ = new BehaviorSubject(50);
  private _showHandle$ = new BehaviorSubject(false);
  public _style$ = new BehaviorSubject(GaugeStyle.CLASSIC);


  @Input() set progress(progress: number) {
    this._progress$.next(progress);
  }

  @Input() set threshold(threshold: number) {
    this._threshold$.next(threshold);
  }

  @Input() set showHandle(showHandle: boolean) {
    this._showHandle$.next(showHandle);
  }

  @Input() set style(style: GaugeStyle) {
    this._style$.next(style);
  }

  @Output() progressChange = new EventEmitter<number>();

  @ViewChild('progressView', {static: true, read: ElementRef}) progressView!: ElementRef;

  ngAfterViewInit() {
    const sources = {
      progress: this._progress$.pipe(
        distinctUntilChanged(),
        tap(p => this.progressChange.emit(p)),
        map(this.toFraction),
      ),
      threshold: this._threshold$.pipe(
        map(this.toFraction),
      ),
      showHandle: this._showHandle$,
      style: this._style$.pipe(
        delay(0) //wait for class to be applied
      )
    }

    this.subscription = combineLatest(sources).pipe(
      tap(({
             progress,
             threshold,
             showHandle
           }) => progressPie(this.progressView.nativeElement, progress, showHandle, threshold))
    ).subscribe();

    registerForMouseAndTouch(this.progressView.nativeElement, (evt: number) => this._progress$.next(evt));
  }

  private toFraction(progress: number) {
    return progress / 100;
  }

  ngOnDestroy() {
    if (this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

}


