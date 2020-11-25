import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonCompoComponent } from './mon-compo.component';

describe('MonCompoComponent', () => {
  let component: MonCompoComponent;
  let fixture: ComponentFixture<MonCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
