import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { weather } from '../apiservice/api.service';

@Component({
  selector: 'app-weathercomp',
  templateUrl: './weathercomp.component.html',
  styleUrls: ['./weathercomp.component.scss']
})
export class WeathercompComponent implements OnInit {

  weather_obj = {
    'lat': '',
    'lon': ''
  }

  username = "Name"
  location = "Location Name"
  weatherSubscription: Subscription | undefined
  weatherReportData: any = {};
  constructor(private weatherservice: weather) { }

  ngOnInit(): void {
    this.getLocation();
    this.weatherSubscription = this.weatherservice.WeatherStatus$.subscribe((response: any) => {
      console.log(response)
      this.weatherReportData = response;
      this.weatherReportData.main.temp = ( response.main.temp - 273)
      this.weatherReportData.main.temp_max = (response.main.temp_max -  273)
      this.weatherReportData.main.temp_min = (response.main.temp_min - 273)

    })
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position: any) => {
        this.weather_obj.lat = position.coords.latitude
        this.weather_obj.lon = position.coords.longitude;
        this.weatherservice.weatherdata(this.weather_obj);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

}
