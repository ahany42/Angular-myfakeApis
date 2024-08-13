import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
  carsArr:any[]=[];
  constructor(){
    this.fetchCars();
  }
  async fetchCars() {
    try {
      const response = await fetch("https://myfakeapi.com/api/cars");
      const data = await response.json(); 
      this.carsArr = data.cars; 
      console.log(this.carsArr);
    } catch (error) {
      console.error("Error Fetching From Cars Api", error);
    }
  }
}
