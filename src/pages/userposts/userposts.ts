import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UserpostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userposts',
  templateUrl: 'userposts.html',
})
export class UserpostsPage {
  userpost = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public modalCtrl: ModalController, public user: UserProvider) {
    this.user.userposts(localStorage.getItem('id')).subscribe( res=> {		  
      let response = JSON.parse(res['_body']);
       this.userpost = response.result;
      console.log(this.userpost);	
}, err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpostsPage');
  }

}
