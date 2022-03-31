import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataGridComponent } from './user-data-grid.component';

describe('UserDataGridComponent', () => {
  let component: UserDataGridComponent;
  let fixture: ComponentFixture<UserDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
