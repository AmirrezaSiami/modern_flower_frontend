import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(
      environment.apiUrl + "auth/login",
      {
        email: email,
        password: password
      }
    );
  }

  // getToken(): string{
  //
  // }
}
