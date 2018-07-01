import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { region } from '../region';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-allregions',
  templateUrl: './allregions.component.html',
  styleUrls: ['./allregions.component.css'],
  providers: [NgbCarouselConfig]
})
export class AllRegionsComponent implements OnInit {
  public regions:Array<region>;

  constructor(config:NgbCarouselConfig,public router:Router,private appService:AppService) { 
    config.interval=5000;
    config.wrap=true;
    config.keyboard=true;
  }
  
  ngOnInit() {
    this.regions=this.appService.getRegions();
  }

}
