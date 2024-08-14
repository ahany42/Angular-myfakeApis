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
@Input() carEdited:boolean = false;
@Output() remove = new EventEmitter<void>();
@Output() view = new EventEmitter<any>();
@Output() edit = new EventEmitter<any>();
DeleteCar(){
  this.remove.emit();
}
ViewCar(){
  this.view.emit(this.car);
}
checkbox = document.getElementById('AvailableCheckBox') as HTMLInputElement | null;
if (checkbox:HTMLInputElement) {
  checkbox.checked =true;
}
SaveCard(){
this.carEdited=false;
}
}
