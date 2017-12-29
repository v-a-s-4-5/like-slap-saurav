import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SinglepostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singlepost',
  templateUrl: 'singlepost.html',
})
export class SinglepostPage {
  singlePostData = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.singlePostData = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglepostPage');
  }

}
