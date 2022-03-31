import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenUsingInterceptorComponent } from './token-using-interceptor.component';

describe('TokenUsingInterceptorComponent', () => {
  let component: TokenUsingInterceptorComponent;
  let fixture: ComponentFixture<TokenUsingInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenUsingInterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenUsingInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
