import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
  carsArr:any[]=[];
  FilterValue="All";
  filteredCarsArr:any[]=[];
  constructor(){
    this.fetchCars();
  }
  async fetchCars() {
    try {
      const response = await fetch("https://myfakeapi.com/api/cars");
      const data = await response.json(); 
      this.carsArr = data.cars; 
      this.filteredCarsArr=this.carsArr;
      console.log(this.carsArr);
    } catch (error) {
      console.error("Error Fetching From Cars Api", error);
    }
  }
 
  Filter(event:Event){
   
      const target = event.target as HTMLInputElement;
      this.FilterValue=target.value;
      if(this.FilterValue==="InStock"){
        this.filteredCarsArr=this.carsArr.filter(car=>car.availability);
      }
      else if(this.FilterValue==="OutOfStock")
        {
        this.filteredCarsArr=this.carsArr.filter(car=>!car.availability);
      }
      else{
        this.filteredCarsArr=this.carsArr;
      }
    
  }
}
