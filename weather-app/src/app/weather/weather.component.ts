import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: any;

  @Output() weatherAdded = new EventEmitter<any>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather() {
    if (this.city.trim() !== '') {
      this.weatherService.getWeather(this.city)
        .subscribe((data: any) => {
          this.weatherData = data;
          this.weatherAdded.emit(this.weatherData); // Emit event with weather data
        });
    }
  }
}
