import { Component, Input } from '@angular/core';
import { IExperience } from '../../models/experience-item.interface';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {

  @Input() experience: IExperience = {
    id: '',
    name: '',
    date_es: '',
    date_en: '',
    description_en: '',
    description_es: '',
  };

}
