import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  imports: [SidebarComponent, NgClass, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private portfolioService = inject(PortfolioDataService);
  private translationService = inject(TranslationService);

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

  // language logic

  translateLanguage(): void {
    this.translationService.translateLanguage();
  }

  getCurrentLanguage(): string {
    if (this.translationService.getCurrentLanguage() === 'en') {
      return 'assets/icons/usa_icon.png';
    } else {
      return 'assets/icons/spain_icon.png';
    }
  }

}
