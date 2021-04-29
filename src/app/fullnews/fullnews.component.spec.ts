import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullnewsComponent } from './fullnews.component';

describe('FullnewsComponent', () => {
  let component: FullnewsComponent;
  let fixture: ComponentFixture<FullnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
