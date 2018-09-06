import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreService } from '../core/core.service';
import { Band } from '../models/band';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(private http:HttpClient) { }

  getBands(){
    let user = CoreService.getLoggedUser().user;
    let filterOwer = '?owner=' + user.id;
    return this.http.get<Band[]>(CoreService.SERVER_URL + CoreService.API_ENDPOINT.API_BAND + filterOwer);
  }


}



