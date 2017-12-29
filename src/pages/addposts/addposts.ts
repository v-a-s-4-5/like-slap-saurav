import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController,LoadingController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ImageinsertPage } from '../imageinsert/imageinsert';
/**
 * Generated class for the AddpostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addposts',
  templateUrl: 'addposts.html',
})
export class AddpostsPage {
  
   postsadd = {
    imageName:'', 
    userid:'',
    title: '',
    content: '',
	base64Data: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController,public loadingCtrl: LoadingController, public viewCtrl: ViewController, public user: UserProvider) {
   this.postsadd.userid = localStorage.getItem('id');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpostsPage');
  }
  addposts(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.user.addPosts(this.postsadd).subscribe( res=> {
      console.log(res);
      loading.dismiss();
      this.viewCtrl.dismiss();
    }, err => console.log(err))
 }
 fileUpload(event) {
  let file = event.srcElement.files[0];
  console.log(file);
  this.postsadd.imageName = file.name.replace(' ','-');
  let reader = new FileReader();
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsBinaryString(file);
}
_handleReaderLoaded(readerEvt) {
  let binaryString = readerEvt.target.result;
  this.postsadd.base64Data = btoa(binaryString);
}
imageinsert(){
  this.navCtrl.push(ImageinsertPage);
}
}
