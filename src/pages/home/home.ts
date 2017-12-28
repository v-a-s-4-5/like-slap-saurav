import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { UserProvider} from '../../providers/user/user';
import { WelcomePage } from '../welcome/welcome';
import { AddpostsPage } from '../addposts/addposts';
import { UserpostsPage } from '../userposts/userposts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	userDetails = {};

  constructor(public navCtrl: NavController, public userProvider: UserProvider,public modal: ModalController) {
		this.getProfile();
  }
  profile(){
    this.userProvider.doLogout().subscribe( res=> {
		let response = JSON.parse(res['_body']);
		console.log(response);
		if(response.success == 'true'){
			
			console.log('data Successfully');
			localStorage.setItem('id', response.session);
			this.navCtrl.push(WelcomePage);
		   }
	    }, err => console.log(err));
	        
		   
	}
	addposts(){
		//this.navCtrl.push(AddpostsPage);
		this.modal.create(AddpostsPage).present();
	}

  getProfile(){

	  this.userProvider.getProfile().subscribe( res=> {		  
							let response = JSON.parse(res['_body']);
							 this.userDetails = response.result;
							console.log(response.result);	
	    }, err => console.log(err));
	}
	userPosts(){
		this.navCtrl.push(UserpostsPage);
	}
}
