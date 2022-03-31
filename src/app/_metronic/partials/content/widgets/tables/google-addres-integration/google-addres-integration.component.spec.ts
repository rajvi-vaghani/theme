import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAddresIntegrationComponent } from './google-addres-integration.component';

describe('GoogleAddresIntegrationComponent', () => {
  let component: GoogleAddresIntegrationComponent;
  let fixture: ComponentFixture<GoogleAddresIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleAddresIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAddresIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
