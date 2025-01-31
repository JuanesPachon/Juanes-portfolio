import { Component, inject, input, Input } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLinkWithHref } from '@angular/router';
import { IProject } from '../../models/project.interface';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
    selector: 'app-project-page',
    imports: [FooterComponent, RouterLinkWithHref],
    templateUrl: './project-page.component.html',
    styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {

  private readonly portfolioService = inject(PortfolioDataService);

  id = input.required<string>();
  ngOnInit(): void {
    this.portfolioService.getProjectById(this.id()).subscribe({
      next: (project: IProject | undefined) => {
        if (project) {
          this.project = project;
        }
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  project: IProject | null = null;

}
