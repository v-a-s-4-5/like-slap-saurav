import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { WelcomePage } from '../pages/welcome/welcome';
import { UserProvider } from '../providers/user/user';
import { ProfilePage } from '../pages/profile/profile';
import { AddpostsPage } from '../pages/addposts/addposts';
import { DisplaypostsPage } from '../pages/displayposts/displayposts';
import { UserpostsPage } from '../pages/userposts/userposts';
import { SinglepostPage } from '../pages/singlepost/singlepost';
import { SingleuserpostsPage } from '../pages/singleuserposts/singleuserposts';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ConfirmationPage,
	ProfilePage,
    WelcomePage,
    AddpostsPage,
    DisplaypostsPage,
    SinglepostPage,
    SingleuserpostsPage,
    UserpostsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ConfirmationPage,
    SinglepostPage,
    SingleuserpostsPage,
	ProfilePage,
    WelcomePage,
    AddpostsPage,
    DisplaypostsPage,
    UserpostsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
