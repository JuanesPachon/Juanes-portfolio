import { Component, inject, input } from '@angular/core';
import { IExperience } from '../../../../models/experience-item.interface';
import { TranslationService } from '../../../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-experience-item',
    imports: [TranslateModule],
    templateUrl: './experience-item.component.html',
    styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {

  private readonly translationService = inject(TranslationService);

  experience = input.required<IExperience>();

  // Language logic

  getCurrentDescriptionLanguage() {
    if (this.translationService.getCurrentLanguage() === 'en') {
      return this.experience()?.description_en;
    } else {
      return this.experience()?.description_es;
    }
  }

  getCurrentDateLanguage() {
    if (this.translationService.getCurrentLanguage() === 'en') {
      return this.experience()?.date_en;
    } else {
      return this.experience()?.date_es;
    }
  }

}
