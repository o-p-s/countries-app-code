import { Component, OnInit } from '@angular/core';
import { region } from './regions/region';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public regions:region;

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.regions=this.appService.getRegions();
  }
  public getCountries=(name)=>{
    this.appService.getCountriesFromRegion(name);
  }
 
}
