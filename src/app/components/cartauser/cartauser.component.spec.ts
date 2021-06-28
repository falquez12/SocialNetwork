import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartauserComponent } from './cartauser.component';

describe('CartauserComponent', () => {
  let component: CartauserComponent;
  let fixture: ComponentFixture<CartauserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartauserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
