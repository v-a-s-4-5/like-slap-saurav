import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleuserpostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singleuserposts',
  templateUrl: 'singleuserposts.html',
})
export class SingleuserpostsPage {

  singleUserPostData = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.singleUserPostData = this.navParams.get('data');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleuserpostsPage');
  }

}
