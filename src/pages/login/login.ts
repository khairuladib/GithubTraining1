import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { VacancyPage } from '../vacancy/vacancy';
import { UserDetail } from './../../models/interfaces/user-details.interface';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@IonicPage({ name: 'login' })
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage { 
  @ViewChild('idNumber') idNumber;
  @ViewChild('password') password;
  splash = true;
  tabBarElement: any;
  guest = false;
  idAccess: string;
  user: Observable<firebase.User>;
  userDetail = {} as UserDetail;
  userRef: FirebaseListObservable<UserDetail[]>;
  jobListRef: FirebaseListObservable<UserDetail[]>;
  statis: FirebaseListObservable<UserDetail[]>;

  constructor(
    private alertCtrl: AlertController, private fire:AngularFireAuth, private database: AngularFireDatabase, private app: App,
    public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController ) {
    this.tabBarElement = document.querySelector('.tabbar');
    this.userRef = this.database.list('users');
    this.jobListRef= this.database.list('vacancies');
    this.statis = this.database.list('xstats');
    this.fire.auth.signOut();

  }

  ionViewDidLoad() {
    this.database.list('stats')
    var stat = firebase.database().ref('/xstats/');
    stat.child('createdJob').once('value', (statistic) => {
      console.log('find: '+statistic.val());
      if (statistic.val() == null) {
        this.statis.set('createdJob', 9999);
      }
    });
    setTimeout(() => {
      this.splash = false;
    }, 3000);
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Information!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.idNumber.value.split(' ').join("") + "@YC.COM", this.password.value)
    .then( data => { 
      this.navCtrl.setRoot(TabsPage);
    }).catch( error => {
      if (error.message == 'The email address is badly formatted.') {
        this.alert('Enter a valid IC/License Number!');
      } else {
        this.alert(error.message);
      }
    })
  }

  resetPassword() {
    this.fire.auth.sendPasswordResetEmail(this.idNumber.value.split(' ').join("")+'@YC.COM').then((user) => {
      var data = firebase.database().ref('/users/'+this.idNumber.value.split(' ').join(""));
      data.child('question').once('value', (snapshot) => {
      var item = snapshot.val();
      let alert = this.alertCtrl.create({
        title: 'Reset Password',
        subTitle: '-Answer following question if you know the answer.',
        message: 'Q: "'+item+'"',
        inputs: [{
          name: 'answer',
          placeholder: 'Enter your answer?'
        }],
        buttons: [{
            text: "Proceed",
            handler: data => {
              // Check if Correct Answer and Valid
              var datas = firebase.database().ref('/users/'+this.idNumber.value.split(' ').join(""));
              datas.child('answer').once('value', (snapshot) => {
              var items = snapshot.val();
              // If Correct proceed with Changing Password 
                if (items == data.answer) {
                  var datasec = firebase.database().ref('/users/'+this.idNumber.value.split(' ').join(""));
                  datasec.child('password').once('value', (snapshot) => {
                  this.idAccess = this.idNumber.value;
                  this.fire.auth.signInWithEmailAndPassword(this.idAccess + "@YC.COM", snapshot.val().toString())
                    .then( datac => {
                      // Delete User
                        var user = firebase.auth().currentUser;
                        user.delete();
                        console.log('User status: '+user.email);
                        let alerts = this.alertCtrl.create({
                          title: 'Change Password',
                          inputs: [{
                            name: 'newP',
                            type: 'password',
                            placeholder: 'Enter your New Password'
                          },{
                            name: 'douP',
                            type: 'password',
                            placeholder: 'Re-Enter your New Password' 
                          }],
                          buttons: [{
                            text: "Change",
                            handler: datan => {
                                if (datan.newP == datan.douP) {
                                  this.fire.auth.createUserWithEmailAndPassword(this.idAccess + "@YC.COM", datan.newP).then(data => {
                                  var user = this.fire.auth.currentUser;
                                    user.updateProfile({
                                      displayName: this.idAccess,
                                      photoURL: ""
                                    }).then(function() {
                                      firebase.auth().signOut();
                                    }).catch(function(error){});
                                  }).catch(error => {
                                    this.alert(error.message);
                                  });
                                  this.userRef.update(this.idAccess, {
                                    password: datan.newP,
                                  });
                                  this.alert('Success!, please login with your new password.');
                                } else {
                                  this.fire.auth.createUserWithEmailAndPassword(this.idAccess + "@YC.COM", snapshot.val().toString()).then(data => {
                                  var user = this.fire.auth.currentUser;
                                    user.updateProfile({
                                      displayName: this.idAccess,
                                      photoURL: ""
                                    }).then(function() {
                                      firebase.auth().signOut();
                                    }).catch(function(error){});
                                  }).catch(error => {
                                    this.alert(error.message);
                                  });
                                  this.alert('Unsuccessful! password is mismatched.');
                                }
                              }
                          }]
                        });alerts.present();
                    }).catch( error => {
                      console.log('got an error', error);
                      this.alert(error.message);
                    });
                    this.app.getRootNav().setRoot(LoginPage);
                  });
                  this.idAccess = undefined;
                } else {
                  this.alert('Wrong answer, please try again.');
                }
              });
            }
          },{
            text: 'Cancel',
            role: 'cancel'
          }]
        });alert.present();
      });
    }, (error) => {
      var errorMessage: string = error.message;
      let errorAlert = this.alertCtrl.create({
        message: 'Please enter a valid IC/License number!',
        buttons: [{ text: "Ok", role: 'cancel' }]
      });errorAlert.present();
    });
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Register as ..',
      buttons: [{
          text: 'USER(JOBSEEKER)',
          role: 'destructive',
          handler: () => {
            this.register('user');}
        },{
          text: 'COMPANY',
          handler: () => {
            this.register('company');}
        },{
          text: 'Cancel',
          role: 'cancel'
      }]
    });actionSheet.present();
  }

  register(sel) {
    this.navCtrl.push(RegisterPage, {sel});
  }

  goGuest() {
    this.guest = true;
  }

  goBack() {
    this.guest = false;
  }
}
