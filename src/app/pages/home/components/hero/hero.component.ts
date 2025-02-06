import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  // Source images when hovering

  githubSrc: string = '/assets/icons/github_icon.svg';
  linkedinSrc: string = '/assets/icons/linkedin_icon.svg';

  changeGithubSrc(source: string): void {
    this.githubSrc = source;
  }
  changeLinkedinSrc(source: string): void {
    this.linkedinSrc = source;
  }
  
}
