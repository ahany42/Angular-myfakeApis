import { Component } from '@angular/core';
import {Car} from '../Model/car';
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
  DeleteCar(id:number){
    this.filteredCarsArr=this.filteredCarsArr.filter(car=>car.id!==id);
  }
  EditCar(id:number){
    let index:number;
    index=this.filteredCarsArr.findIndex(car=>car.id===id);
    this.filteredCarsArr[index].car="Honda";
    this.filteredCarsArr[index].availability=true;
  
  }
}
