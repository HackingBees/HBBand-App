import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { CoreService } from '../core/core.service';

@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http:HttpClient, private coreService:CoreService) { }

  getUsers(){
    return this.http.get<User[]>(this.coreService.SERVER_URL + this.coreService.API_ENDPOINT.API_USERS);
  }
}
