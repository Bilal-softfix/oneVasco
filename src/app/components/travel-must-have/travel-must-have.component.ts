import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-must-have',
  imports: [CommonModule],
  templateUrl: './travel-must-have.component.html',
  styleUrl: './travel-must-have.component.css'
})
export class TravelMustHaveComponent {
  travelItems = [
    {
      title: 'SIM Cards',
      description: 'Stay connected when you travel with a range of Sim cards offered by our partners.',
      icon: 'https://www.onevasco.com/ind/en/assets/img/icons/Travel_Insurance.svg'
    },
    {
      title: 'Forex',
      description: 'Travel across the globe hassle free with our Forex Services.',
      icon: 'https://www.onevasco.com/ind/en/assets/img/icons/Forex_Icon.svg'
    }
  ];
}
