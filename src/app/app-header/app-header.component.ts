import { Component, OnInit } from '@angular/core';
import {  Directive, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/timer'
import { transition, trigger, query, group, style, animate } from '@angular/animations';

@Directive({
  selector: '[bannerCtrl]',
  exportAs: 'bannerCtrl'
})
export class BannerCtrlDirective {
  @Input() itemsLength: number;

  selectedIndex = 0;
  @Output('selectedIndex')  selectedIndexEmitter = new EventEmitter<number>();
  @Output('actualIndex')  actualIndexEmitter = new EventEmitter<number>();

  destroyed$ = new Subject();
  resetTimer$ = new Subject();

  ngOnInit() {
    this.resetTimer$
      .startWith(null)
      .takeUntil(this.destroyed$)
      .switchMap(t => Observable.timer(19000, 19000))
      .subscribe(() => this.next())
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }

  actualIndex() {
    let len = this.itemsLength;
    // negative still return the right index
    return ((this.selectedIndex % len) + len) % len;
  }

  setIndex(index: number) {
    this.selectedIndex = index;
    this.actualIndexEmitter.next(this.actualIndex())
    this.selectedIndexEmitter.next(index)
    this.resetTimer$.next();
  }

  previous() {
    --this.selectedIndex
    this.actualIndexEmitter.next(this.actualIndex());
    this.selectedIndexEmitter.next(this.selectedIndex);
    this.resetTimer$.next();
  }

  next() {
    ++this.selectedIndex
    this.actualIndexEmitter.next(this.actualIndex())
    this.selectedIndexEmitter.next(this.selectedIndex)
    this.resetTimer$.next();
  }

}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  animations: [
    trigger('bannerAnimation', [
      transition(":increment", group([
        query(':enter', [
          style({ left: '100%' }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '-100%' }))
        ])
      ])),
      transition(":decrement", group([
        query(':enter', [
          style({ left: '-100%' }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '100%' }))
        ])
      ])),
    ])
  ]
})
export class AppHeaderComponent implements OnInit {
  backingItems = ['https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/10/mslide_8.jpg', 'https://storycode.co/wp-content/uploads/2019/08/adults-blur-business-people-1811991-2-1920x1140.jpg'];
  actualIndex = 0;
  selectedIndex = 0;

  get items() {
    return [this.backingItems[this.actualIndex]];
  }
  constructor() { }

  ngOnInit() {
  }
  
}
