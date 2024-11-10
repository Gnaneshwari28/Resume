import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class MapsComponent {

  apiKey: string = 'AIzaSyBfvgfJgMfVYgSWUzu5OyhJYtRXmo6Kfuc'; 
  mapId: string = 'fef1e383c9157d0f';    
  center: google.maps.LatLngLiteral = { lat: 11.2189, lng: 78.1675 };
  zoom = 12;

}
