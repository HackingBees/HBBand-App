import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  public SERVER_URL: string = 'http://localhost:1337';
  public API_ENDPOINT = {
    API_AUTHENTICATE: '/auth/signin',
    API_USERS: '/user',
  };


  constructor() {}


  //Manage Storage to Session maybe one day local storage db
  setStorage(key, value) {
    localStorage[key] = value;
  }
  getStorage(key, defaultValue) {
    return localStorage[key] || defaultValue;
  }
  setStoreObject(key, value) {
    localStorage[key] = JSON.stringify(value);
  }
  getStoreObject(key) {
    return JSON.parse(localStorage[key] || '{}');
  }

  getLoggedUser(){
    return JSON.parse(localStorage.getItem('LoggedUser'));
  }

  setLoggedUser(user){
     localStorage.setItem('LoggedUser', user);
  }


}