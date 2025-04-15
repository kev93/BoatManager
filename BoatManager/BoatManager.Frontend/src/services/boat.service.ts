import { Injectable } from '@angular/core';
import { Boat } from '../models/boat'

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  public getBoats(): Boat[] {
    let boat = new Boat(1, "My fancy boat", "this is a very nice boat");
    return [boat];
  }
}
