import { Component, Input, SimpleChanges } from '@angular/core';
import { IProject } from '../../models/project.interface';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project: IProject = {
    id: '',
    name: '',
    description_en: '',
    description_es: '',
    technologies: [],
    images: [],
    url: '',
    github_url: '',
  };

  mainTechnologies: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project'] && this.project.technologies) {
      this.mainTechnologies = this.project.technologies.slice(0, 3);
    }
  }

}
