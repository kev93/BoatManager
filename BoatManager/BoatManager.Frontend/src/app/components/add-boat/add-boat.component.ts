import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-boat',
  templateUrl: './add-boat.component.html',
  styleUrls: ['./add-boat.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})

export class AddBoatComponent {
  boatForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.boatForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[A-Za-zÄÖÜäöü].*')]],
      details: ['', [Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    if (this.boatForm.valid) {
      const newBoat = this.boatForm.value;
      console.log('Boat to add:', newBoat);
    }
  }
}
