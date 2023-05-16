import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  cvsUrl = 'https://localhost:8080/cv';

  constructor(protected http: HttpClient) { }

  getCv() {
    return this.http.get(this.cvsUrl);
  }

  updateCv(data: Cv) {
    return this.http.post(this.cvsUrl + '/' + data.id, data)
  }

  createCv(data: Cv) {
    return this.http.post(this.cvsUrl, data)
  }

  deleteCv(id: number) {
    return this.http.delete(this.cvsUrl + '/' + id)
  }
}
