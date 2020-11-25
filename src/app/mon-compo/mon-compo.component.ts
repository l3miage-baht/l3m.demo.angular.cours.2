import { Component, EventEmitter, Input, OnChanges, OnInit, Output, AfterContentChecked,
  AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mon-compo',
  templateUrl: './mon-compo.component.html',
  styleUrls: ['./mon-compo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line: max-line-length
export class MonCompoComponent implements OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() data: unknown = undefined;
  @Output() clickButton = new EventEmitter<number>();
  lifeCycleTraces: unknown[][] = [];
  txt = 'coucou';
  private pNbRendu = 0;
  get nbRendus(): number {
    this.log('Affichage du composant');
    return ++this.pNbRendu;
  }

  constructor() {
    this.log('constructor');
  }

  clickBt(): void {
    this.log('clickBt');
    this.clickButton.emit( Date.now() );
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  private log(...L: unknown[]): void {
    this.lifeCycleTraces.push(L);
    console.log('MonCompo :', ...L);
  }
}
