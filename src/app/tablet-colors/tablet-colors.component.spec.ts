import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletColorsComponent } from './tablet-colors.component';

describe('TabletColorsComponent', () => {
  let component: TabletColorsComponent;
  let fixture: ComponentFixture<TabletColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
