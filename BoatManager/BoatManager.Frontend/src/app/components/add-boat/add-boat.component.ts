import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoatService } from '../../../services/boat.service';
import { Boat } from '../../../models/boat';

@Component({
  selector: 'app-add-boat',
  templateUrl: './add-boat.component.html',
  styleUrls: ['./add-boat.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})

export class AddBoatComponent {
  boatForm: FormGroup;

  constructor(private boatService: BoatService, private fb: FormBuilder) {
    this.boatForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      details: ['', [Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    if (this.boatForm.valid) {
      const { name, details } = this.boatForm.value;
      const id = crypto.randomUUID();
      const newBoat = new Boat(id, name, details);
      this.boatService.addBoat(newBoat).subscribe((boat: Boat) => console.log('New Boat:', boat));
      this.boatForm.reset();
    }
  }
}
