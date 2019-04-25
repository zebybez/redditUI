import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditCreateComponent } from './reddit-create.component';

describe('RedditCreateComponent', () => {
  let component: RedditCreateComponent;
  let fixture: ComponentFixture<RedditCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
