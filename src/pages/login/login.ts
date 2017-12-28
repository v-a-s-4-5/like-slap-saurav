import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
userlogin = {
    email: '',
    password: ''
  }

  
  msg;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public modalCtrl: ModalController, public user: UserProvider) {
  this.msg = this.navParams.get('msg');
  }
  login(){
	  
	  
	  
	 this.user.doLogin(this.userlogin).subscribe( res=> {
		
		let response = JSON.parse(res['_body']);
		// console.log(response.success);
		// console.log(response.session);
		if(response.success == 'true'){
			console.log('data true');
			localStorage.setItem('id', response.session);
			this.navCtrl.push(HomePage);
		}
	}, err => console.log(err));
	 
  }
  
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  openForgotpassword(){
    this.alert.create({
      title: 'Forgot Password',
      subTitle: 'Please provide the email that you use for register',
      inputs: [
        {
          name: 'email',
          placeholder: 'Enter Email'
        }],
      buttons: [{
        text: 'Send Email',
        handler: data =>{
          console.log(data);
		  this.user.forgetPassword(data);
        }
      }]
    }).present();
  }
  openHome(){
      this.navCtrl.setRoot(HomePage);
      }
}
