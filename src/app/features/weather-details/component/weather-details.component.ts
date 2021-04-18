import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {CityDTO, WeatherDetailsDTO} from '../weather-details.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDetailsComponent {
  @Input() showSpinner: boolean;
  @Input() cityList: CityDTO[];
  @Input() weatherInfoList: WeatherDetailsDTO[];
  @Output() citySelectionChangeEvent: EventEmitter<string> = new EventEmitter<string>();
  displayedColumns = ['datTime', 'temperature', 'humidity', 'description'];

  getSelectedCity(city): void {
    this.citySelectionChangeEvent.emit(city.value);
  }
}
