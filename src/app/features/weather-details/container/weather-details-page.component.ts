import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherDetailsService} from '../weather-details.service';
import {CityDTO, WeatherDetailsDTO} from '../weather-details.model';
import {Subscription} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-weather-details-page',
  templateUrl: './weather-details-page.component.html',
  styleUrls: ['./weather-details-page.component.scss'],
})
export class WeatherDetailsPageComponent implements OnInit, OnDestroy {
  showSpinner: boolean;
  cityList: CityDTO[];
  weatherInfoList: WeatherDetailsDTO[];
  private subscription = new Subscription();

  constructor(private weatherService: WeatherDetailsService) { }

  ngOnInit(): void {
    this.cityList = [
      { cityId: '1277333', cityName: 'Bengaluru' },
      { cityId: '1850147', cityName: 'Tokyo' },
      { cityId: '2643743', cityName: 'London' },
      { cityId: '1275339', cityName: 'Mumbai' },
      { cityId: '5128638', cityName: 'New York' },
    ];
    this.getWeatherForecast(this.cityList[0].cityId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  citySelectionChangeEventHandler(cityId: string): void {
    this.getWeatherForecast(cityId);
  }

  private getWeatherForecast(cityId: string): void {
    this.showSpinner = true;
    this.subscription.add(this.weatherService.getWeatherForecast(cityId)
      .pipe(finalize( () => this.showSpinner = false))
      .subscribe((result: WeatherDetailsDTO[]) => {
        this.weatherInfoList = result;
      }));
  }
}
