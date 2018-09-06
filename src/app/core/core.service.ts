import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  public static SERVER_URL: string = 'http://localhost:1337';
  
  public static API_ENDPOINT = {
    API_AUTHENTICATE: '/auth/signin',
    API_USER: '/api/user',
    API_BAND: '/api/band'
  };


  constructor() {}


  //Manage Storage to Session maybe one day local storage db
  public static setStorage(key, value) {
    localStorage[key] = value;
  }
  public static getStorage(key, defaultValue) {
    return localStorage[key] || defaultValue;
  }
  public static setStoreObject(key, value) {
    localStorage[key] = JSON.stringify(value);
  }
  public static getStoreObject(key) {
    return JSON.parse(localStorage[key] || '{}');
  }

  public static getLoggedUserJWT( ){
    return JSON.parse(localStorage.getItem('LoggedUser'));
  }
  public static getLoggedUser(){
    return JSON.parse(localStorage.getItem('LoggedUser'));
  }

  public static setLoggedUser(user){
     localStorage.setItem('LoggedUser', user);
  }


}