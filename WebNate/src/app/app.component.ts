import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./ImportantParts/navigation/navigation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  title = 'WebNate';
  lastScrollY = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const navbar = this.document.getElementById('Nav');
    if (!navbar) return;

    if (window.scrollY > this.lastScrollY) {
      navbar.classList.add('Hidden-Nav'); // Hide navbar on scroll down
    } else {
      navbar.classList.remove('Hidden-Nav'); // Show navbar on scroll up
    }

    this.lastScrollY = window.scrollY;
  }
}
