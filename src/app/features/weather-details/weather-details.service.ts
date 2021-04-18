import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WeatherDetailsDTO} from './weather-details.model';
import {map} from 'rxjs/operators';


@Injectable()
export class WeatherDetailsService {
  private readonly API_KEY: string = 'df907e47b9d36be014ddbbdd7afc12dc' ;
  private readonly url: string = `https://api.openweathermap.org/data/2.5/forecast`;

  constructor(private http: HttpClient) { }

  getWeatherForecast(cityId: string): Observable<WeatherDetailsDTO[]> {
    const parameters = new HttpParams()
      .set('appid', this.API_KEY)
      .set('id', cityId);
    return this.http.get<{ list: WeatherDetailsDTO[]}>(this.url, { params: parameters})
      .pipe(map( weatherDTO => weatherDTO.list));
  }
}
