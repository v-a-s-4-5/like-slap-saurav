import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConfirmationPage } from '../confirmation/confirmation';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
userregister = {
    imageName: '',
    fname: '',
    lname: '',
    email: '',
    number: '',
    password: '',
	base64Data: ''
  }
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public modalCtrl: ModalController, public user: UserProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
  confirmCode(){
    this.navCtrl.push(ConfirmationPage);
  }
    registeruser(){
     this.user.doRegister(this.userregister);
  }
   fileUpload(event) {
    let file = event.srcElement.files[0];
    console.log(file);
    this.userregister.imageName = file.name.replace(' ','-');
    let reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
  }
  _handleReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;
    this.userregister.base64Data = btoa(binaryString);
  }
}
