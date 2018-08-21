import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {

  private users:User[]=[];
  constructor(private userService:UserService){}

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      data => {
          console.log(data);
          this.users = data;
      },
      error => {
        console.log(error);
      });
  }


}
