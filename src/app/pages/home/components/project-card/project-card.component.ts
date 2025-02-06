import { Component, inject, input, SimpleChanges } from '@angular/core';
import { IProject } from '../../../../models/project.interface';
import { RouterLinkWithHref } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../../services/translation.service';

@Component({
  selector: 'app-project-card',
  imports: [RouterLinkWithHref, TranslateModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  private readonly translationService = inject(TranslationService);

  project = input.required<IProject>();

  mainTechnologies: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project'] && this.project().technologies) {
      this.mainTechnologies = this.project().technologies.slice(0, 3);
    }
  }

  // Language logic

  getCurrentDescriptionLanguage() {
    if (this.translationService.getCurrentLanguage() === 'en') {
      return this.project()?.description_en;
    } else {
      return this.project()?.description_es;
    }
  }

}
