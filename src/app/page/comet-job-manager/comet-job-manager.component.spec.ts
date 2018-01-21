import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CometJobManagerComponent } from './comet-job-manager.component';

describe('CometJobManagerComponent', () => {
  let component: CometJobManagerComponent;
  let fixture: ComponentFixture<CometJobManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CometJobManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CometJobManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
