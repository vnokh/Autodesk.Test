import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWelcomeComponent } from './sign-in-welcome.component';

describe('SignInWelcomeComponent', () => {
  let component: SignInWelcomeComponent;
  let fixture: ComponentFixture<SignInWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
