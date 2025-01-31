import { Component, input, SimpleChanges } from '@angular/core';
import { IProject } from '../../models/project.interface';
import { RouterLinkWithHref } from '@angular/router';

@Component({
    selector: 'app-project-card',
    imports: [RouterLinkWithHref],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  project = input.required<IProject>();

  mainTechnologies: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project'] && this.project().technologies) {
      this.mainTechnologies = this.project().technologies.slice(0, 3);
    }
  }

}
