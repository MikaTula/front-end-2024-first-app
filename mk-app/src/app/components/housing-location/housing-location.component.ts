import {Component, input} from '@angular/core';
import {HousingLocation} from '../../interface/housinglocation';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [
    RouterLink
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss',
  standalone: true
})
export class HousingLocationComponent {
  public readonly housingLocation = input.required<HousingLocation>();
}
