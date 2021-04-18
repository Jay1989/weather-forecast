import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WeatherDetailsPageComponent} from './container/weather-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherDetailsRoutingModule  { }
