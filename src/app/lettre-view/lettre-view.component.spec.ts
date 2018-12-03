import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreViewComponent } from './lettre-view.component';

describe('LettreViewComponent', () => {
  let component: LettreViewComponent;
  let fixture: ComponentFixture<LettreViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettreViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
