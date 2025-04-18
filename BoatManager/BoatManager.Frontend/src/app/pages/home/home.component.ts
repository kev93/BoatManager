import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boat } from '../../../models/boat';
import { BoatService } from '../../../services/boat.service';
import { AddBoatComponent } from '../../components/add-boat/add-boat.component';
import { BoatEntryComponent } from '../../components/boat-entry/boat-entry.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, AddBoatComponent, BoatEntryComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  boats: Boat[] = [];

  constructor(private boatService: BoatService) { }

  ngOnInit(): void {
    this.loadBoats();
  }

  loadBoats(): void {
    this.boatService
      .getBoats()
      .subscribe((result: Boat[]) => (this.boats = result));
  }
}
