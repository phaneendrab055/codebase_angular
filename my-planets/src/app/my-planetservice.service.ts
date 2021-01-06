import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {IPlanet} from './planets'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MyPlanetserviceService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<IPlanet[]>{
    return this.http.get<IPlanet[]>('https://assignment-machstatz.herokuapp.com/planet');
  }
}
