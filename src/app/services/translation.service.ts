import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translateService = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  translateLanguage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentLang = localStorage.getItem('lang') || 'en';

      const newLang = currentLang === 'en' ? 'es' : 'en';

      localStorage.setItem('lang', newLang);

      this.translateService.use(newLang);
    } else {
      this.translateService.use('en');
    }
  }

  getCurrentLanguage(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('lang') || 'en';
    }
    return 'en';
  }

}
