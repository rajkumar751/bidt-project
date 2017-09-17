import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurningComponent } from './churning.component';

describe('ChurningComponent', () => {
  let component: ChurningComponent;
  let fixture: ComponentFixture<ChurningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
