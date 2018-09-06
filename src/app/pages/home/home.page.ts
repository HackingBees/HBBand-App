import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BandCreatePage } from '../band/band-create/band-create.page';

import { NavController,AlertController } from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { BandService } from '../../services/band.service';
import { Band } from '../../models/band';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {

  private bands:Band[]=[];
  constructor(private userService:UserService, 
              private bandService:BandService,
              private modalController:ModalController,
              private navController:NavController){}

  ngOnInit() {
    this.bandService.getBands()
    .subscribe(
      data => {
          console.log(data);
          this.bands = data;
      },
      error => {
        console.log(error);
      });
  }


  async createBand() {
    const modal = await this.modalController.create({
      component: BandCreatePage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}

