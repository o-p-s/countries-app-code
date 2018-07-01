import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { country } from '../interfaces/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit,OnDestroy {
  public country:country;
  
  constructor(private router:Router,private route:ActivatedRoute,private appService:AppService) { }

  ngOnInit() {
    let name=this.route.snapshot.paramMap.get('countryName');
    this.country=this.appService.getCountryFromLocalStroage(name);
  }
  ngOnDestroy(){
    this.appService.setNavbarState(true);
  }
}
