// tslint:disable-next-line: max-line-length
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-sous-compo',
  templateUrl: './mon-sous-compo.component.html',
  styleUrls: ['./mon-sous-compo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line: max-line-length
export class MonSousCompoComponent implements OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() monID = '';
  unTexte = 'sous texte';

  constructor() {
    this.log('constructor');
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
    console.log(`\tMonSousCompo :`, ...L, this.monID);
  }

}
