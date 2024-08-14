import { Component,Input,EventEmitter,Output,ViewChild,ElementRef } from '@angular/core';
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

@ViewChild('CarInput') carInput!: ElementRef<HTMLInputElement>;
@ViewChild('ColorInput') colorInput!: ElementRef<HTMLInputElement>;
@ViewChild('ModelInput') modelInput!: ElementRef<HTMLInputElement>;
@ViewChild('YearInput') yearInput!: ElementRef<HTMLInputElement>;
@ViewChild('PriceInput') priceInput!: ElementRef<HTMLInputElement>;

@ViewChild('ColorText') colorText!: ElementRef;
@ViewChild('ModelText') modelText!: ElementRef;
@ViewChild('YearText')  yearText!: ElementRef;
@ViewChild('PriceText') priceText!: ElementRef;

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
  const carName = this.carInput.nativeElement.value;
  const carColor = this.colorInput.nativeElement.value;
  const carModel = this.modelInput.nativeElement.value;
  const carModelYear = this.yearInput.nativeElement.value;
  const carPrice = this.priceInput.nativeElement.value;

  this.colorText.nativeElement.classList.add('text-muted');
  this.modelText.nativeElement.classList.add('text-muted');
  this.yearText.nativeElement.classList.add('text-muted');
  this.priceText.nativeElement.classList.add('text-muted');
  
  this.carInput.nativeElement.classList.remove('is-invalid');
  this.colorInput.nativeElement.classList.remove('is-invalid');
  this.modelInput.nativeElement.classList.remove('is-invalid');
  this.yearInput.nativeElement.classList.remove('is-invalid');
  this.priceInput.nativeElement.classList.remove('is-invalid');

  if(carName ===""){
    this.carInput.nativeElement.classList.add('is-invalid');
  }
  if(carColor === ""){

    this.colorText.nativeElement.classList.add('text-danger');
    this.colorText.nativeElement.classList.remove('text-muted');
    this.colorInput.nativeElement.classList.add('is-invalid');
    
  }
  if(carModel === ""){
    this.modelText.nativeElement.classList.add('text-danger');
    this.modelText.nativeElement.classList.remove('text-muted');
    this.modelInput.nativeElement.classList.add('is-invalid');
  }
  if(carModelYear === ""){
    this.yearText.nativeElement.classList.add('text-danger');
    this.yearText.nativeElement.classList.remove('text-muted');
    this.yearInput.nativeElement.classList.add('is-invalid');
  }
  if(carPrice === ""){
    this.priceText.nativeElement.classList.add('text-danger');
    this.priceText.nativeElement.classList.remove('text-muted');
    this.priceInput.nativeElement.classList.add('is-invalid');
  }
  if(carName !=="" && carColor !=="" && carModel!=="" && carModelYear !=="" && carPrice !==""){

    this.carEdited=false;
  }
}
DiscardCard(){
  this.carEdited=false;
}
}
