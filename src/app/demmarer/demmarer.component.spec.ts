import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemmarerComponent } from './demmarer.component';

describe('DemmarerComponent', () => {
  let component: DemmarerComponent;
  let fixture: ComponentFixture<DemmarerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemmarerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemmarerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
