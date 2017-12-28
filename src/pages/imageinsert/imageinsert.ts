import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ImageinsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imageinsert',
  templateUrl: 'imageinsert.html',
})
export class ImageinsertPage {
  insertimage = {
    imageName:'', 
  base64Data: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public modalCtrl: ModalController, public user: UserProvider) {
   
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageinsertPage');
  }
  imageinsert(){
    console.log("called");
        this.modalCtrl.create(ImageinsertPage).present();
 }
 fileUpload(event) {
  let file = event.srcElement.files[0];
  console.log(file);
  this.insertimage.imageName = file.name.replace(' ','-');
  let reader = new FileReader();
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsBinaryString(file);
}
_handleReaderLoaded(readerEvt) {
  let binaryString = readerEvt.target.result;
  this.insertimage.base64Data = btoa(binaryString);
}
}
