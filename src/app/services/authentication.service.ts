import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CoreService } from '../core/core.service';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  constructor(private http: HttpClient, private coreService:CoreService) { }

  login(username: string, password: string) {
      return this.http.post<any>(this.coreService.SERVER_URL + this.coreService.API_ENDPOINT.API_AUTHENTICATE, {'email': username,'password': password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response\
              console.log(user)
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  this.coreService.setLoggedUser(JSON.stringify(user));
              }

              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      // create a new method to kill the session on sails server ??
      //localStorage.removeItem('currentUser');
      this.coreService.setLoggedUser(null);
  }
}

