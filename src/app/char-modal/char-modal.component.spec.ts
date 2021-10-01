import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharModalComponent } from './char-modal.component';

describe('CharModalComponent', () => {
  let component: CharModalComponent;
  let fixture: ComponentFixture<CharModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
