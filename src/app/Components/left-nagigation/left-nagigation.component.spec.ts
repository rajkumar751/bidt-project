import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNagigationComponent } from './left-nagigation.component';

describe('LeftNagigationComponent', () => {
  let component: LeftNagigationComponent;
  let fixture: ComponentFixture<LeftNagigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNagigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNagigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
