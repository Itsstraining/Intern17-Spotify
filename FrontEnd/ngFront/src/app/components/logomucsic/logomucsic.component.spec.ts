import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogomucsicComponent } from './logomucsic.component';

describe('LogomucsicComponent', () => {
  let component: LogomucsicComponent;
  let fixture: ComponentFixture<LogomucsicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogomucsicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogomucsicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
