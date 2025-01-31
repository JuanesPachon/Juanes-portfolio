import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-header',
    imports: [SidebarComponent, NgClass],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

  private portfolioService = inject(PortfolioDataService);

  // scroll to section logic

  scrollToSection(sectionId: string): void {
      
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 160,
        behavior: 'smooth',
      });
    }

    this.isMenuOpen.set(false);
  
  }

  // open Mobile menu logic

  isMenuOpen = this.portfolioService.isMenuOpen;

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

}
