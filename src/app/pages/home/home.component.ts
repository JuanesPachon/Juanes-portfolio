import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
