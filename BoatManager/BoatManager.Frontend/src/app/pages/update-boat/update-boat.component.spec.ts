import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoatComponent } from './update-boat.component';

describe('UpdateBoatComponent', () => {
  let component: UpdateBoatComponent;
  let fixture: ComponentFixture<UpdateBoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBoatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
