import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatEntryComponent } from './boat-entry.component';

describe('BoatEntryComponent', () => {
  let component: BoatEntryComponent;
  let fixture: ComponentFixture<BoatEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoatEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
