import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boat } from '../../../models/boat';

@Component({
  selector: 'app-boat-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boat-entry.component.html',
  styleUrl: './boat-entry.component.css'
})
export class BoatEntryComponent {
  @Input() boat!: Boat;
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
