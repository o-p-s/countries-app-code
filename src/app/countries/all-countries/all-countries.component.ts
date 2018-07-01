import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { country } from '../interfaces/country';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  private regionName:string;
  private currencyCode:string;
  private langCode:string; 
  public countries:country[];
  constructor(private router:Router, private route:ActivatedRoute,private appService:AppService,private toastr:ToastrService){ 
    route.params.subscribe(val=>{
      if(this.regionName=this.route.snapshot.paramMap.get('regionName')){
        this.loadCountriesFromRegion();
      }
      else if(this.currencyCode=this.route.snapshot.paramMap.get('currencyCode')){
        this.loadCountriesFromCurrency();
      }
      else if(this.langCode=this.route.snapshot.paramMap.get('langCode')){
        this.loadCountriesFromLanguage();
      }
    });
  }

  ngOnInit() {
  }
  public loadCountriesFromRegion=()=>{
    this.appService.getCountriesFromRegion(this.regionName).subscribe(data=>{
      this.countries=data;
    },error=>{
      console.log('error occurred');
    })
  }
  public loadCountriesFromCurrency=()=>{
    this.appService.getCountriesFromCurrency(this.currencyCode).subscribe(data=>{
      this.countries=data;
      this.toastr.success("Currency filter applied in all regions.");
    },error=>{
      console.log('error occurred');
    })
  }
  public loadCountriesFromLanguage=()=>{
    this.appService.getCountriesFromLanguage(this.langCode).subscribe(data=>{
      this.countries=data;
      this.toastr.success("Language filter applied in all regions.");
    },error=>{
      console.log('error occurred');
    })
  }
  public navigateToCountryView=(data)=>{
    this.appService.clearLocalStorage();
    this.appService.setCountryInLocalStorage(data);
    this.appService.setNavbarState(false);
    this.router.navigate(['/country',data.name]);
  }
}
