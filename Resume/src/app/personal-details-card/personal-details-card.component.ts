import { Component, InjectionToken } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";


@Component({
  selector: 'app-personal-details-card',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './personal-details-card.component.html',
  styleUrl: './personal-details-card.component.scss'
})
export class PersonalDetailsCardComponent {

  options: google.maps.MapOptions = {
    mapId: "fef1e383c9157d0f",
    center: { lat: 48.8584, lng: 2.2945 }, 
    zoom: 15, 
  };
 

}
