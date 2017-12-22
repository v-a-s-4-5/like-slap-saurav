import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { UserProvider} from '../../providers/user/user';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {

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

}
