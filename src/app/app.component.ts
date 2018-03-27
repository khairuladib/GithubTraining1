import { Component } from '@angular/core';
import { App, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import * as firebases from 'firebase/app';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})

export class MyApp {
  user: Observable<firebases.User>;
  items: FirebaseListObservable<any[]>;
  username: string = '';
    userParams = {
    curuser: ''
  }
  rootPage:any;

  constructor(
    private app: App, private fire: AngularFireAuth,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ) {

    platform.ready().then(() => {

    });
    
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user==null) {
        this.rootPage = LoginPage;
        unsubscribe();
      } else {
        var name = user.displayName;
        this.userParams.curuser = name;
        console.log('Got user '+ name +' and '+this.userParams.curuser);
        this.rootPage = TabsPage;
        unsubscribe();
      }
    });
  }
}

