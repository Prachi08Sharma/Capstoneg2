import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofasComponent } from './sofas.component';

describe('SofasComponent', () => {
  let component: SofasComponent;
  let fixture: ComponentFixture<SofasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SofasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
