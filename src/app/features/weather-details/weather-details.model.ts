export interface CityDTO {
  cityId: string;
  cityName: string;
}

export interface WeatherDetailsDTO {
  dt_txt: string;
  main: {
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
  };
  weather: [{
    description: string
  }];
}


