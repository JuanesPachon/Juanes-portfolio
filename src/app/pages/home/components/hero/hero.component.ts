import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioDataService } from '../../../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  private readonly portFolioService = inject(PortfolioDataService);

  // Source images when hovering

  githubSrc: string = '/assets/icons/github_icon.svg';
  linkedinSrc: string = '/assets/icons/linkedin_icon.svg';

  changeGithubSrc(source: string): void {
    this.githubSrc = source;
  }
  changeLinkedinSrc(source: string): void {
    this.linkedinSrc = source;
  }

  // Download CV

  downloadCv(): void {
    this.portFolioService.getCurriculumVitae().subscribe(blob => {
      const a = document.createElement('a')
      const objectUrl = URL.createObjectURL(blob)
      a.href = objectUrl
      a.download = 'cv_juan_pachon_full_stack_web_developer.pdf'
      a.click();
      URL.revokeObjectURL(objectUrl);
    })
  }
  
}
