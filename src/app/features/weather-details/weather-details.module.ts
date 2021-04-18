import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { WeatherDetailsPageComponent } from './container/weather-details-page.component';
import { WeatherDetailsComponent } from './component/weather-details.component';
import {WeatherDetailsRoutingModule} from './weather-details-routing.module';
import {WeatherDetailsService} from './weather-details.service';

@NgModule({
  declarations: [
    WeatherDetailsPageComponent,
    WeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    WeatherDetailsRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [WeatherDetailsService]
})
export class WeatherDetailsModule { }
