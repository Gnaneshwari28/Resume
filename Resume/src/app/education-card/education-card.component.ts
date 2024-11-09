import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss'
})
export class EducationCardComponent {

}
