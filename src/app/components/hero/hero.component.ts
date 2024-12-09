import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule],
})
export class HeroComponent {

  nationalities = ['Indian', 'American', 'Canadian'];
  residences = ['India', 'USA', 'Germany'];
  destinations = ['Australia', 'UK', 'France'];


  selectedNationality = 'Select Nationality';
  selectedResidence = 'India';
  selectedDestination = 'Select Destination';


  showNationalityDropdown = false;
  showResidenceDropdown = false;
  showDestinationDropdown = false;

  toggleDropdown(type: string): void {
    if (type === 'nationality') {
      this.showNationalityDropdown = !this.showNationalityDropdown;
      this.showResidenceDropdown = false;
      this.showDestinationDropdown = false;
    } else if (type === 'residence') {
      this.showResidenceDropdown = !this.showResidenceDropdown;
      this.showNationalityDropdown = false;
      this.showDestinationDropdown = false;
    } else if (type === 'destination') {
      this.showDestinationDropdown = !this.showDestinationDropdown;
      this.showResidenceDropdown = false;
      this.showNationalityDropdown = false;
    }
  }

  selectOption(type: string, value: string): void {
    if (type === 'nationality') {
      this.selectedNationality = value;
      this.showNationalityDropdown = false;
    } else if (type === 'residence') {
      this.selectedResidence = value;
      this.showResidenceDropdown = false;
    } else if (type === 'destination') {
      this.selectedDestination = value;
      this.showDestinationDropdown = false;
    }
  }
}
