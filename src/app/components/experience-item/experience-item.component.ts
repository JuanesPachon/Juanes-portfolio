import { Component, input } from '@angular/core';
import { IExperience } from '../../models/experience-item.interface';

@Component({
    selector: 'app-experience-item',
    imports: [],
    templateUrl: './experience-item.component.html',
    styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {

  experience = input.required<IExperience>();

}
