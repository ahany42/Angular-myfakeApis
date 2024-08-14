import { Component, Inject,Output,EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-card-detail-dialog',
  templateUrl: './card-detail-dialog.component.html',
  styleUrls: ['./card-detail-dialog.component.css']
})
export class CardDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CardDetailDialogComponent>, // Correctly type the generic parameter
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  @Output() removep = new EventEmitter<void>();
  onClose(): void {
    this.dialogRef.close();
  }
  DeleteCar(){
    this.removep.emit();
  }
}
