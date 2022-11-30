import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string): Observable<any>{
    return this.httpClient.post(
      "http://modern.flower.admin.local/api/auth/login",
      {
        email: email,
        password: password
      },
      this.httpOptions
    );
  }
}
