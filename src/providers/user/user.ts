import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }
   
  doLogin(user){
    let url = 'http://studio45creations.ipage.com/projects/dev1/schoolmanagment/slaplike/index.php';
    let header = new Headers();
    header.append('Content-Type','application/x-www-form-urlencoded');
    let postjsondata = 'data='+JSON.stringify({
      'user':user,
      'action': 101
    });
    return this.http.post(url,postjsondata,{headers:header});
  }
  doRegister(user){
    console.log(user);
    let url = 'http://studio45creations.ipage.com/projects/dev1/schoolmanagment/slaplike/index.php';
    let header = new Headers();
    header.append('Content-Type','application/x-www-form-urlencoded');
    let postjsondata = 'data='+JSON.stringify({
      'user':user,
      'action': 102
    });
    this.http.post(url,postjsondata,{headers:header}).subscribe( res=> console.log(res), err => console.log(err));
  }
  forgetPassword(user){
    console.log(user);
    let url = 'http://studio45creations.ipage.com/projects/dev1/schoolmanagment/slaplike/index.php';
    let header = new Headers();
    header.append('Content-Type','application/x-www-form-urlencoded');
    let postjsondata = 'data='+JSON.stringify({
      'user':user,
      'action': 103
    });
    this.http.post(url,postjsondata,{headers:header}).subscribe( res=> console.log(res), err => console.log(err));
  }
  
  getProfile(){	  
      
    let id = localStorage.getItem('id');
    let url = 'http://studio45creations.ipage.com/projects/dev1/schoolmanagment/slaplike/index.php';
      let header = new Headers();
      header.append('Content-Type','application/x-www-form-urlencoded');
      let postjsondata = 'data='+JSON.stringify({
        'id':id,
      'action': 105
      });      
    return this.http.post(url,postjsondata,{headers:header});
	
  }
  doLogout(){
	let id = localStorage.getItem('id');
	localStorage.removeItem('id');
	let url = 'http://studio45creations.ipage.com/projects/dev1/schoolmanagment/slaplike/index.php';
    let header = new Headers();
    header.append('Content-Type','application/x-www-form-urlencoded');
    let postjsondata = 'data='+JSON.stringify({
      'id':id,
      'action': 104
    });
    return this.http.post(url,postjsondata,{headers:header});
  }
  addPosts(user){
    console.log(user);
    let url = 'http://studio45creations.ipage.com/projects/dev1/schoolmanagment/slaplike/index.php';
    let header = new Headers();
    header.append('Content-Type','application/x-www-form-urlencoded');
    let postjsondata = 'data='+JSON.stringify({
      'user':user,
      'action': 106
    });
    this.http.post(url,postjsondata,{headers:header}).subscribe( res=> console.log(res), err => console.log(err));
  }
  displayposts(id){	  
    let url = 'http://studio45creations.ipage.com/projects/dev1/schoolmanagment/slaplike/index.php';
      let header = new Headers();
      header.append('Content-Type','application/x-www-form-urlencoded');
      let postjsondata = 'data='+JSON.stringify({
        'id':id,
      'action': 107
      });      
    return this.http.post(url,postjsondata,{headers:header});
  }
  userposts(id){	  
    let url = 'http://studio45creations.ipage.com/projects/dev1/schoolmanagment/slaplike/index.php';
      let header = new Headers();
      header.append('Content-Type','application/x-www-form-urlencoded');
      let postjsondata = 'data='+JSON.stringify({
        'id':id,
      'action': 108
      });      
    return this.http.post(url,postjsondata,{headers:header});
  }
}
