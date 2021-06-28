import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisamigosComponent } from './misamigos.component';

describe('MisamigosComponent', () => {
  let component: MisamigosComponent;
  let fixture: ComponentFixture<MisamigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisamigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisamigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
