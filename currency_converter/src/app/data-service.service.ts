import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async getList(): Promise<any>{
    let data = await fetch("https://currency-converter-pro1.p.rapidapi.com/currencies", 
      {headers: {
        'X-RapidAPI-Key': '773f5cfff4msh853fd382951c944p1c020djsn743c978f64b1',
        'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
      }}
    )

    return (await data.json()) ?? [];
  }
  async convert(amount:number, firstCurrency:string, secondCurrency:string): Promise<any>{
    
    const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${firstCurrency}&to=${secondCurrency}&amount=${amount}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '773f5cfff4msh853fd382951c944p1c020djsn743c978f64b1',
        'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = response.json()
      return (result);
    } catch (error) {
      console.error(error);
    }
    
  }
  
}
