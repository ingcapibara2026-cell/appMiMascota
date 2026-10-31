import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class Nosotros implements AfterViewInit {
  @ViewChild('carrusel') carrusel!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const bootstrap = (window as any).bootstrap;
    if (bootstrap) {
      bootstrap.Carousel.getOrCreateInstance(this.carrusel.nativeElement, { ride: 'carousel' });
    }
  }
}
