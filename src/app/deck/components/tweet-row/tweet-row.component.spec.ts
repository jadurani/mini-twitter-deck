import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetRowComponent } from './tweet-row.component';

describe('TweetRowComponent', () => {
  let component: TweetRowComponent;
  let fixture: ComponentFixture<TweetRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
