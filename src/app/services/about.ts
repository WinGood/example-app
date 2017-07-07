import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { About } from '../models/about';

@Injectable()
export class AboutService {
  private API_PATH = 'http://localhost:3000';

  constructor(private http: Http) {}

  getAbout(): Observable<About> {
    return this.http.get(`${this.API_PATH}/about`)
      .map(res => res.json());
  }
}
