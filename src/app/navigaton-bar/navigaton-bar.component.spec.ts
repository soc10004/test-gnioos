import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatonBarComponent } from './navigaton-bar.component';

describe('NavigatonBarComponent', () => {
  let component: NavigatonBarComponent;
  let fixture: ComponentFixture<NavigatonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
