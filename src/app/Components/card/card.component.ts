import { Component,Input,EventEmitter,Output } from '@angular/core';
import { CardsListComponent } from '../cards-list/cards-list.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() car:any;
@Input() cardViewed: boolean = false;
@Output() remove = new EventEmitter<void>();
@Output() view = new EventEmitter<any>();

DeleteCar(){
  this.remove.emit();
}
ViewCar(){
  this.view.emit(this.car);
}
}
