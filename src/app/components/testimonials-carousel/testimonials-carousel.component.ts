import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.css'],
  imports:[CommonModule]
})
export class TestimonialsCarouselComponent {
  testimonials = [
    {
      image: 'https://www.onevasco.com/ind/en/assets/img/home/review/Analiza-Tapungot-Thumb.webp',
      quote:
        "I cannot thank OneVasco enough for their visa concierge services. They made the visa application process seamless and stress-free, guiding me through every step of the way. Their expert team's attention to detail and personalized approach made all the difference in obtaining my visa quickly and efficiently. Highly recommended. ",
      name: 'Analiza Tapungot',
    },
    {
      image: 'https://www.onevasco.com/ind/en/assets/img/home/review/Laila-Ahmad-Thumb.webp',
      quote:
        "I was impressed with OneVasco's Smart Auto Fill service and Documents Vault, which made the visa application process quicker and easier than ever before. The Smart Auto Fill service populated the application with my information automatically, and the Documents Vault securely stored all of my important documents, eliminating the need for me to upload them repeatedly. It was a game-changer for my visa application experience.",
      name: 'Laila Ahmad',
    },
    {
      image: 'https://www.onevasco.com/ind/en/assets/img/home/review/Analiza-Tapungot-Thumb.webp',
      quote:
        "I cannot thank OneVasco enough for their visa concierge services. They made the visa application process seamless and stress-free, guiding me through every step of the way. Their expert team's attention to detail and personalized approach made all the difference in obtaining my visa quickly and efficiently. Highly recommended. ",
      name: 'Analiza Tapungot',
    },
    {
      image: 'https://www.onevasco.com/ind/en/assets/img/home/review/Laila-Ahmad-Thumb.webp',
      quote:
        "I was impressed with OneVasco's Smart Auto Fill service and Documents Vault, which made the visa application process quicker and easier than ever before. The Smart Auto Fill service populated the application with my information automatically, and the Documents Vault securely stored all of my important documents, eliminating the need for me to upload them repeatedly. It was a game-changer for my visa application experience.",
      name: 'Laila Ahmad',
    },
  ];

  currentSlide = 0;
  dragStartX = 0;
  dragCurrentX = 0;
  dragOffset = 0;
  isDragging = false;


  onDragStart(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.dragStartX = this.getEventX(event);
    this.dragCurrentX = this.dragStartX;
    this.dragOffset = -this.currentSlide * window.innerWidth -500;
  }

  onDragging(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const currentX = this.getEventX(event);
    this.dragCurrentX = currentX;
    const deltaX = currentX - this.dragStartX;
    this.dragOffset = -this.currentSlide * window.innerWidth + deltaX;
  }


  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;

    const deltaX = this.dragCurrentX - this.dragStartX;
    const threshold = (window.innerWidth / 4)-500;

    if (deltaX > threshold) {
      this.prevSlide();
    } else if (deltaX < -threshold) {
      this.nextSlide();
    } else {
      this.dragOffset = -this.currentSlide * window.innerWidth;
    }
  }


  nextSlide() {
    if (this.currentSlide < this.testimonials.length/2 - 1) {
      this.currentSlide++;
    }
    this.updateOffset();
  }


  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
    this.updateOffset();
  }


  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateOffset();
  }


  updateOffset() {
    this.dragOffset = -this.currentSlide * window.innerWidth+50;
  }


  private getEventX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
      ? event.clientX
      : event.touches[0].clientX;
  }
  get dotCount(): number[] {
    return Array(Math.ceil(this.testimonials.length / 2)).fill(0);
  }
}
