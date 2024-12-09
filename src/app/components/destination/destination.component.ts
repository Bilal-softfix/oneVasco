import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  imports: [CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  destinations = [
    {
      name: 'Switzerland Visa',
      image: 'https://www.onevasco.com/ind/en/assets/img/home/destinations/Switzerland.webp'
    },
    {
      name: 'Canada Visa',
      image: 'https://www.onevasco.com/ind/en/assets/img/home/destinations/Canada.webp'
    },
    {
      name: 'Germany Visa',
      image: 'https://www.onevasco.com/ind/en/assets/img/home/destinations/germany.webp'
    },
    {
      name: 'United Kingdom Visa',
      image: 'https://www.onevasco.com/ind/en/assets/img/home/destinations/UAE.webp'
    }
  ];
}
