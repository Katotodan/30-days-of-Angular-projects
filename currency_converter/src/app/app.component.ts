import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { DataService } from './data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    SelectComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'currency_converter';
  firstCurrency:string = "";
  secondCurrency:string = "";
  convertedValue?:number
  isLoading:boolean = false

  constructor(private dataService: DataService){}

  saveCurrencyOne(currency: string){
    this.firstCurrency = currency;
  }
  saveCurrencyTwo(currency: string){    
    this.secondCurrency = currency;
  }
 
  convert(amount:string){
    if(this.firstCurrency && this.secondCurrency){
      // Fetch the API
      this.isLoading = true
      this.dataService.convert(Number(amount), this.firstCurrency, this.secondCurrency).then((res:any)=>{
        this.isLoading = false
        this.convertedValue = res.result
      }).catch((err:any) => {
        console.error()
        this.isLoading = false
      })
    }else{
      console.log("No");
      
    }
  }
}
