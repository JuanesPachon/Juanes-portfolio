import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../models/project.interface';
import { error } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private readonly projectService = inject(ProjectService);

  // Source images when hovering

  githubSrc: string = '/assets/icons/github_icon.svg';
  linkedinSrc: string = '/assets/icons/linkedin_icon.svg';

  changeGithubSrc(source: string): void {
    this.githubSrc = source;
  }
  changeLinkedinSrc(source: string): void {
    this.linkedinSrc = source;
  }

  // Get projects info

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (projects: IProject[]) => {
        this.projects = projects;
      },
      error: (err: any) => {
        console.log(err);
      }
    }) 
  }

  projects: IProject[] = [];

}
