import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonSousCompoComponent } from './mon-sous-compo.component';

describe('MonSousCompoComponent', () => {
  let component: MonSousCompoComponent;
  let fixture: ComponentFixture<MonSousCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonSousCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonSousCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
