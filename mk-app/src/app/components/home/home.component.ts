import {Component, effect, inject, signal} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../../interface/housinglocation';
import {CommonModule} from '@angular/common';
import {HousingService} from '../../services/housing.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HousingLocationComponent,
    RouterModule,
    FormsModule
  ],
  templateUrl: 'home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  filterText = signal<string>('');

  constructor() {
    effect(() => this.housingService.getFilteredHousingLocations(this.filterText()).then((result) => this.housingLocationList = result))
  }

}
