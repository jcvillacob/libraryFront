import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  @ViewChildren('cardElement') cardElements!: QueryList<ElementRef>;
  cards: boolean = false;
  
  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('index'));
          if (index >= 0) {
            this.cards = true;
          }
        }
      });
    }, options);

    // Retrasar la observación por una fracción de segundo
    setTimeout(() => {
      this.cardElements.forEach(cardElement => observer.observe(cardElement.nativeElement));
    }, 500); // Puedes ajustar este tiempo si es necesario
  }
}
