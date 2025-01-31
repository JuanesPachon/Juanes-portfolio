import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    imports: [NgClass],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

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

}
