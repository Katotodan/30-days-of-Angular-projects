import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private apiKey = "182d80a90a5841f9a2f130758242105"
  
  constructor() { }

  async fetchWeather(town: string): Promise<any> {
    const url = `http://api.weatherapi.com/v1/current.json?key=182d80a90a5841f9a2f130758242105&q=${town}&aqi=no`
    try {
      const data = await fetch(url);
      return await data.json() ?? [];
    } catch (error) {
      return null
      
    }
    
    
   
    
  }
}
