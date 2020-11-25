import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonSousSousCompoComponent } from './mon-sous-sous-compo.component';

describe('MonSousSousCompoComponent', () => {
  let component: MonSousSousCompoComponent;
  let fixture: ComponentFixture<MonSousSousCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonSousSousCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonSousSousCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
