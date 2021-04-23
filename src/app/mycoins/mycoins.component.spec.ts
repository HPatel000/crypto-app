import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoinsComponent } from './mycoins.component';

describe('MycoinsComponent', () => {
  let component: MycoinsComponent;
  let fixture: ComponentFixture<MycoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
