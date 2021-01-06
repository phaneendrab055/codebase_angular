import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = 'd28295f20b0ef773f009c4934fad8a29'

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  load(city: String){
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
  }

  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}
