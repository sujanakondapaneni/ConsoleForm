import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleFormComponent } from './console-form.component';

describe('RegistrationFormComponent', () => {
  let component: ConsoleFormComponent;
  let fixture: ComponentFixture<ConsoleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
