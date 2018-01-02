import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { DisplaycommentsPage } from '../displaycomments/displaycomments';

/**
 * Generated class for the AllpostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allposts',
  templateUrl: 'allposts.html',
})
export class AllpostsPage {

  posts = [];
  postId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public modalCtrl: ModalController, public user: UserProvider) {
    this.postId = this.navParams.get('id');
    this.user.displayposts(localStorage.getItem(this.postId)).subscribe( res=> {		  
      let response = JSON.parse(res['_body']);
       this.posts = response.result;
      console.log(this.posts);	
}, err => console.log(err));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplaypostsPage');
  }
 
  displaycomments(postId){
    this.modalCtrl.create(DisplaycommentsPage, {
      id: postId
    }).present();
  }
  displaylikes(postId){
    //console.log("postId"+postId);
    this.user.displaylike(postId).subscribe( res=> {
      console.log(res);
   })

  }
}
