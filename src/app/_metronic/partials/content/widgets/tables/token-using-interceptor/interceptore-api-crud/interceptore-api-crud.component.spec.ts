import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptoreApiCrudComponent } from './interceptore-api-crud.component';

describe('InterceptoreApiCrudComponent', () => {
  let component: InterceptoreApiCrudComponent;
  let fixture: ComponentFixture<InterceptoreApiCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptoreApiCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptoreApiCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
