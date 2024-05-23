import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { CommonModule, NgIf  } from '@angular/common';
import { } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    CommonModule,
    NgIf 
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @Input() townName: string = "";


  isDataFetch: boolean = false;
  country: string= "";
  region: string= "";
  town: string= "";
  temperature: number = 0;
  lat: number= 0;
  lon: number =0;
  imgUrl: string = "";
  weatherText: string = "";

  isLoading: boolean = false;
  townNotFound: boolean = false;


  constructor(public dataService: FetchDataService){}


  ngOnChanges(changes: SimpleChanges) {
    const newTownValue = changes["townName"].currentValue
    

    // Fetch the API
    if(newTownValue){
      this.isLoading = true
      this.dataService.fetchWeather(newTownValue).then((retunedValue: any) => {
         // Update the UI
        if(retunedValue){
         this.isDataFetch = true;
          this.country = retunedValue.location.country;
          this.town = retunedValue.location.name;
          this.region = retunedValue.location.region;
          this.temperature = retunedValue.current.temp_c;
          this.lat = retunedValue.location.lat;
          this.lon = retunedValue.location.lon;
          this.imgUrl = "http:" + retunedValue.current.condition.icon;
          this.weatherText = retunedValue.current.condition.text; 
          this.townNotFound = false;
        }else{
          this.isDataFetch = false;
          this.townNotFound = true
        }
        
        this.isLoading = false;
      })
    }
      
   
   
  }
  
    
}
