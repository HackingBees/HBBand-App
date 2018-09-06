import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { CoreService } from '../core/core.service';

@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(CoreService.SERVER_URL + CoreService.API_ENDPOINT.API_USER);
  }
}
