import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UserconnectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userconnection',
  templateUrl: 'userconnection.html',
})
export class UserconnectionPage {

  userconnection = [];
   constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public modalCtrl: ModalController, public user: UserProvider) {
    this.user.userConnection(localStorage.getItem('id')).subscribe( res=> {		  
      let response = JSON.parse(res['_body']);
       this.userconnection = response.result;
      console.log(this.userconnection);	
}, err => console.log(err));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserconnectionPage');
  }
sendRequest(receiverId){
  this.user.recieverConn(receiverId).subscribe(res=>{
   let response = JSON.parse(res['_body']);
   this.sendRequest = response.result;
   console.log(this.sendRequest);
  });
}
}
