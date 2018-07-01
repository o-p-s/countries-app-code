import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import { AppService } from '../app.service';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import {MatCardModule, MatButtonModule} from '@angular/material';
import { CountryComponent } from './country/country.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    ScrollToModule.forRoot(),
    ScrollbarModule,
    RouterModule.forChild([
      {path:'region/:regionName/countries',component:AllCountriesComponent},
      {path:'allregions/currency/:currencyCode',component:AllCountriesComponent},
      {path:'allregions/language/:langCode',component:AllCountriesComponent},
      {path:'country/:countryName',component:CountryComponent}
    ])
  ],
  declarations: [AllCountriesComponent, CountryComponent],
  providers:[AppService]
})
export class CountriesModule { }
