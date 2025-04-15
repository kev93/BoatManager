import { Component } from '@angular/core';
import { Boat } from '../models/boat';
import { BoatService } from '../services/boat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BoatManager.Frontend';
  boats: Boat[] = [];

  constructor(private boatService: BoatService) { }

  ngOnInit(): void {
    this.boats = this.boatService.getBoats();
  }
}
