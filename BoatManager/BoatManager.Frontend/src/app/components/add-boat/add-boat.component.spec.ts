import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoatComponent } from './add-boat.component';

describe('AddBoatComponent', () => {
  let component: AddBoatComponent;
  let fixture: ComponentFixture<AddBoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBoatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
