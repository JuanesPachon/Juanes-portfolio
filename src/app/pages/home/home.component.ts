import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IProject } from '../../models/project.interface';
import { IExperience } from '../../models/experience-item.interface';
import { ExperienceItemComponent } from "../../components/experience-item/experience-item.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-home',
    imports: [HeaderComponent, ProjectCardComponent, ExperienceItemComponent, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

  private readonly portfolioService = inject(PortfolioDataService);

  // Source images when hovering

  githubSrc: string = '/assets/icons/github_icon.svg';
  linkedinSrc: string = '/assets/icons/linkedin_icon.svg';

  changeGithubSrc(source: string): void {
    this.githubSrc = source;
  }
  changeLinkedinSrc(source: string): void {
    this.linkedinSrc = source;
  }

  // Get projects and experiences data

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe({
      next: (projects: IProject[]) => {
        this.projects = projects;
      },
      error: (err: any) => {
        console.log(err);
      }
    }) 

    this.portfolioService.getExperiences().subscribe({
      next: (experiences: IExperience[]) => {
        this.experiences = experiences;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  projects: IProject[] = [];
  experiences: IExperience[] = [];

}
