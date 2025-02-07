import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translateService = inject(TranslateService);

  private currentLang = signal('en');

  translateLanguage(): void {
    this.currentLang() === 'en' ? this.currentLang.set('es') : this.currentLang.set('en');
    this.translateService.use(this.currentLang());
  }

  getCurrentLanguage(): string {
    return this.currentLang();
  }

}
