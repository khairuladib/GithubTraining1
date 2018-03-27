import { Component, ViewChild } from '@angular/core';
import { App, AlertController, NavController, NavParams } from 'ionic-angular';
import { MyApp } from './../../app/app.component';
import { HomePage } from '../home/home';
import { VacancyPage } from '../vacancy/vacancy';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;
  tab1Root: any = HomePage;
  tab2Root: any = VacancyPage;
  
  username: string = '';
  userParams = {
    usercca: ''
  }

  constructor(
    private app: App, private fire: AngularFireAuth,
    private alertCtrl: AlertController, public navCtrl: NavController, 
    public navParams: NavParams) {
    
  	this.navParams = navParams;
      console.log(this.navParams);
      this.username = this.navParams.data;
      this.userParams.usercca = this.navParams.get('username');
  }

  logoutUser() {
    let alert = this.alertCtrl.create({
        message: "You are about to Log Out, do you want to proceed?.",
        buttons: [
          {
            text: "Yes",
            handler: () => {
              this.fire.auth.signOut(); 
              this.app.getRootNav().setRoot(MyApp);
            }
          },
          {
            text: "No",
            role: 'cancel',
          }
        ]
      });
      alert.present();
  }  
}
