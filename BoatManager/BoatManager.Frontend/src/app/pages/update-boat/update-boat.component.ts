import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boat } from '../../../models/boat';
import { BoatService } from '../../../services/boat.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-boat',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-boat.component.html',
  styleUrl: './update-boat.component.css'
})
export class UpdateBoatComponent {
  boat: Boat | undefined;
  boatForm: FormGroup;
  constructor(private boatService: BoatService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.boatForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      details: ['', [Validators.maxLength(100)]]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id != null) {
      this.boatService.getBoatById(id).subscribe({
        next: (boat: Boat) => {
          this.boat = boat;
          this.boatForm.setValue({
            name: boat.name,
            details: boat.details
          });
        },
        error: (err) => {
          console.error('Error occured while loading the boat:', err);
        }
      });
    }
  }

  onSubmit() {
    if (this.boat != null) {
      const { name, details } = this.boatForm.value;
      this.boat.name = name;
      this.boat.details = details;
      this.boatService.updateBoat(this.boat).subscribe({
        next: (boat: Boat) => {
          console.log('Updated Boat:', boat);
        },
        error: (err) => {
          console.error('Error occured while updating the boat:', err);
        }
      });
    }
   
  }
}
