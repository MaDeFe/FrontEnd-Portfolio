import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'https://localhost:8080/login';
  logoutUrl = 'https://localhost:8080/logout';


  isLoggedInSource = new BehaviorSubject<boolean>(false);
  isLoggedIn$:Observable<boolean> = this.isLoggedInSource.asObservable();

  constructor(protected http: HttpClient) { }


  login(logindata: any) {

    console.log(logindata),
    this.isLoggedInSource.next(true)

    return this.http.post<any>(this.loginUrl, logindata)
        .pipe(
          map(res => {
            this.isLoggedInSource.next(true)
        }));
  }

  logout() {
    this.isLoggedInSource.next(false)

    return this.http.delete<any>(this.logoutUrl)
        .pipe(
          map(res => {
            this.isLoggedInSource.next(false)
        }));
  }

}
