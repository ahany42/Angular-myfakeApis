import { Component,Input,EventEmitter,Output } from '@angular/core';
import { CardsListComponent } from '../cards-list/cards-list.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() car:any;
@Output() remove = new EventEmitter<void>();
@Output() edit = new EventEmitter<any>();

DeleteCar(){
  this.remove.emit();
}
EditCar(){
  this.edit.emit(this.car);
}
}
