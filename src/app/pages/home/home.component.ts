import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProjectCardComponent } from "../../pages/home/components/project-card/project-card.component";
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IProject } from '../../models/project.interface';
import { IExperience } from '../../models/experience-item.interface';
import { ExperienceItemComponent } from "../../pages/home/components/experience-item/experience-item.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
    selector: 'app-home',
    imports: [HeaderComponent, ProjectCardComponent, ExperienceItemComponent, FooterComponent, SkillsComponent, AboutMeComponent, HeroComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

  private readonly portfolioService = inject(PortfolioDataService);

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
