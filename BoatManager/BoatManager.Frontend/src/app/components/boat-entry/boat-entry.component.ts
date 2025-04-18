import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() deletePressed = new EventEmitter<string>();
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  delete() {
    this.deletePressed.emit(this.boat.id);
  }
}
