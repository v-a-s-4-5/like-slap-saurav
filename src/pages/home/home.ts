import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { UserProvider} from '../../providers/user/user';
import { WelcomePage } from '../welcome/welcome';
import { AddpostsPage } from '../addposts/addposts';
import { UserpostsPage } from '../userposts/userposts';
import { UserconnectionPage } from '../userconnection/userconnection';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	userDetails = {};
  recieverDetails = [];
  constructor(public navCtrl: NavController, public userProvider: UserProvider,public modal: ModalController) {
		this.getProfile();
		let id = localStorage.getItem('id');
		this.userProvider.getReciever(localStorage.getItem('id')).subscribe(res=>{
			console.log(res);
			let response = JSON.parse(res['_body']);
			if(response.result){
				this.recieverDetails = response.result;
				console.log(this.recieverDetails);
			}
		 })
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
			this.modal.create(AddpostsPage).present();
	}

  getProfile(){
	  this.userProvider.getProfile().subscribe( res=> {		  
							let response = JSON.parse(res['_body']);
							 this.userDetails = response.result;
	    }, err => console.log(err));
	}
	userPosts(){
		this.navCtrl.push(UserpostsPage);
	}
	userConnection(){
		this.navCtrl.push(UserconnectionPage);
	}
}
