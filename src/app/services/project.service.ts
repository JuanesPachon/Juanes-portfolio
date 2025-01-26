import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly apiUrl = 'https://kilker1.github.io/Portfolio-Database';
  private http = inject(HttpClient);

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.apiUrl}/projects.json`);
  }

}
