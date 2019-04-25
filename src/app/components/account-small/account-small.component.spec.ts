import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSmallComponent } from './account-small.component';

describe('AccountSmallComponent', () => {
  let component: AccountSmallComponent;
  let fixture: ComponentFixture<AccountSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
