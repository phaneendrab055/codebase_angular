import { Component, OnInit } from '@angular/core';
import {MyPlanetserviceService} from './my-planetservice.service';
import {IPlanet} from './planets'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public planets: IPlanet[] = [];

  constructor(private planetService: MyPlanetserviceService){

  }

  ngOnInit(){
    this.planetService.getPlanets()
    .subscribe((data) => {
      this.planets = data;
      console.log(this.planets);
    });
  }
}
