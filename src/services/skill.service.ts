import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private mySkillsJsonURL = './data/myskills.json';
  private skillCategoryJsonURL = './data/skillscategory.json';

  constructor(private http: HttpClient) { }

  getSkillsJsonData(): Observable<any> {
    return this.http.get(this.mySkillsJsonURL);
  }

  getSkillCategoryJsonData(): Observable<any> {
    return this.http.get(this.skillCategoryJsonURL);
  }
}
