import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllRegionsComponent } from './regions/allregions/allregions.component';
import { RegionsModule } from './regions/regions.module';
import { CountriesModule } from './countries/countries.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AllRegionsComponent
  ],
  imports: [
    BrowserModule,
    RegionsModule,
    CountriesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'regions',component:AllRegionsComponent},
      {path:'',redirectTo:'regions',pathMatch:'full'},
      {path:'*',component:AllRegionsComponent},
      {path:'**',component:AllRegionsComponent},
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
