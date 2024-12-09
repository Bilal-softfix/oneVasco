import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { VascoStepsComponent } from '../components/vasco-steps/vasco-steps.component';
import { ChooseUsComponent } from '../components/choose-us/choose-us.component';
import { DestinationComponent } from '../components/destination/destination.component';
import { TestimonialsCarouselComponent } from '../components/testimonials-carousel/testimonials-carousel.component';
import { TravelMustHaveComponent } from '../components/travel-must-have/travel-must-have.component';


@Component({
  selector: 'app-home',
  imports: [HeroComponent,VascoStepsComponent,ChooseUsComponent,DestinationComponent,TestimonialsCarouselComponent,TravelMustHaveComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true
})
export class HomeComponent {

}
