import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the DisplaypostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-displayposts',
  templateUrl: 'displayposts.html',
})
export class DisplaypostsPage {

 posts = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public modalCtrl: ModalController, public user: UserProvider) {
    this.user.displayposts(localStorage.getItem('id')).subscribe( res=> {		  
      let response = JSON.parse(res['_body']);
       this.posts = response.result;
      console.log(this.posts);	
}, err => console.log(err));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplaypostsPage');
  }
  
}
