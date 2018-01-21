import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractManagerComponent } from './extract-manager.component';

describe('ExtractManagerComponent', () => {
  let component: ExtractManagerComponent;
  let fixture: ComponentFixture<ExtractManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
