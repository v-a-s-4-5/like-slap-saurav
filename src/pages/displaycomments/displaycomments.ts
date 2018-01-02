import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the DisplaycommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-displaycomments',
  templateUrl: 'displaycomments.html',
})
export class DisplaycommentsPage {

  comments = [];
  userComment = '';
  postId: any;
  flag = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,  public userProvider: UserProvider) {
    this.postId = this.navParams.get('id');
    this.userProvider.getComments(this.postId).subscribe( res=> {
      console.log(res['_body']);
      let response = JSON.parse(res['_body']);
      if(response.result){
        this.comments = response.result;
      }
    })
  }
 
 
 dismiss() {
    this.viewCtrl.dismiss();
  }
  
  ionViewDidLoad() {
    console.log('id:',localStorage.getItem('id'));
    if(localStorage.getItem('id') != 'undefined' && localStorage.getItem('id') != 'null'){
      console.log(this.flag);
      this.flag = true;
    }
  }
addComments(postId){
    this.userProvider.addComment(this.postId, this.userComment).subscribe( res=> {
      console.log(res);
    })
}
  
}
