import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProject } from '../models/project.interface';
import { IExperience } from '../models/experience-item.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private readonly apiUrl = 'https://kilker1.github.io/Portfolio-Database';
  private http = inject(HttpClient);

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.apiUrl}/projects.json`);
  }

  getProjectById(id: string): Observable<IProject | undefined> {
    return this.http.get<IProject[]>(`${this.apiUrl}/projects.json`).pipe(
      map((projects: IProject[]) => projects.find(project => project.id === id))
    );
  }

  getExperiences(): Observable<IExperience[]> {
    return this.http.get<IExperience[]>(`${this.apiUrl}/experiences.json`);
  }

}
