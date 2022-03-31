import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignWithGoogleComponent } from './sign-with-google.component';

describe('SignWithGoogleComponent', () => {
  let component: SignWithGoogleComponent;
  let fixture: ComponentFixture<SignWithGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignWithGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignWithGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
