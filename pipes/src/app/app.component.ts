import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  name: string;
  paymentDate: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: '2000'
  };

  onNameChange(value: string){
    this.name = value;
  }

  onDateChange(value: string){
    this.paymentDate = value;
  }

  onAmountChange(value: string){
    this.amount = parseFloat(value);
  }

  onHeightChange(value: string){
    this.height = parseFloat(value);
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }

}
