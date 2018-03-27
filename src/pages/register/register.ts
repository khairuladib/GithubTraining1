import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserDetail } from '../../models/interfaces/user-details.interface';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  @ViewChild('idNumber') idNumber;
  @ViewChild('password') password;
  userDetail = {} as UserDetail;
  userRef$: FirebaseListObservable<UserDetail[]>

  alpha: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  beta: string = 'abcdefghijklmnopqrstuvwxyz';
  numb: string = '0123456789';
  sign: string = '`~!@#$%^&*()_+-=}{][|:?,.<>';
  forb: string = '';

  sel: string;
  jobAdd = 0;
  constructor(
    private alertCtrl: AlertController, private fire: AngularFireAuth,
    private database: AngularFireDatabase, public navCtrl: NavController,  
    public navParams: NavParams) {
    this.sel = this.navParams.get('sel');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Information!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser(userDetail: UserDetail) {
    var fullname, passwords;
    var capLet, smalLet, numbers, other;
    for (var p = 0; p < this.password.value.length; p++) {
      for (var a = 0; a < this.alpha.length; a++) {
        if (this.password.value.charAt(p) == this.alpha.charAt(a)) {
          capLet = true;}
      }
      for (var b = 0; b < this.beta.length; b++) {
        if (this.password.value.charAt(p) == this.beta.charAt(b)) {
          smalLet = true;}
      }
      for (var n = 0; n < this.numb.length; n++) {
        if (this.password.value.charAt(p) == this.numb.charAt(n)) {
          numbers = true;}
      }
      for (var s = 0; s < this.sign.length; s++) {
        if (this.password.value.charAt(p) == this.sign.charAt(s)) {
          other = true;}
      }
    } if (capLet && smalLet && numbers && other) {
      passwords = 'valid'; 
    }

    var at = 0;
    var dot, space;
    if (this.userDetail.email != undefined && this.userDetail.email != '') {
      for (var e = 0; e < this.userDetail.email.length; e++) {
        if (this.userDetail.email.charAt(e) == '@') {
          at = at + 1;
        } else if (this.userDetail.email.charAt(e) == '.') {
          dot = true;
        } else if (this.userDetail.email.charAt(e) == ' ') {
          space = true;
        }
      }
    } 

    if (this.sel == 'user') {
      var loginID = 0;
      for (var i = 0; i < this.userDetail.fullName.length; i++) {
        if ((this.userDetail.fullName.charAt(i)+this.userDetail.fullName.charAt(i+1)+this.userDetail.fullName.charAt(i+2)+this.userDetail.fullName.charAt(i+3)+this.userDetail.fullName.charAt(i+4) == 'BINTI')
          ||(this.userDetail.fullName.charAt(i)+this.userDetail.fullName.charAt(i+1)+this.userDetail.fullName.charAt(i+2)+this.userDetail.fullName.charAt(i+3)+this.userDetail.fullName.charAt(i+4) == ' BIN ')) {
          fullname = 'valid';
          console.log(this.userDetail.fullName.charAt(i)+this.userDetail.fullName.charAt(i+1)+this.userDetail.fullName.charAt(i+2)+this.userDetail.fullName.charAt(i+3)+this.userDetail.fullName.charAt(i+4));
        }
      }
      var logCheck = this.idNumber.value.split('-').join("");
      for (var d = 0; d < logCheck.length; d++) {
        console.log(d+' ID:'+logCheck.charAt(d)+' Current Detection:'+loginID);
        loginID = loginID + 1; 
      }

      if (parseInt(this.userDetail.idNumber.split('P').join("")) && loginID == 8
        || parseInt(this.userDetail.idNumber.split('-').join("")) && loginID == 8) {
        if (fullname == 'valid') {
          if ((at == 1) && (dot) && (!space)) {
            if (passwords == 'valid') {
              if (this.userDetail.question != undefined || this.userDetail.answer != undefined || this.userDetail.answer != "") {
                  
                  this.fire.auth.createUserWithEmailAndPassword(this.idNumber.value + "@YC.COM", this.password.value).then(data => {
                    var user = this.fire.auth.currentUser;
                    user.updateProfile({
                      displayName: this.idNumber.value,
                      photoURL: ""
                    }).then(function() {
                      firebase.auth().signOut();
                    }).catch(function(error){});
                    this.userRef$ = this.database.list('users');
                    if (this.userDetail.color == undefined || '') {
                      this.userRef$.update(this.userDetail.idNumber, {
                        color: ""
                      });
                    } else {
                      this.userRef$.update(this.userDetail.idNumber, {
                        color: this.userDetail.color
                      });
                    }
                    this.userRef$.update(this.userDetail.idNumber, {
                      type: this.sel,
                      photo: 'assets/default.png',
                      fullName: this.userDetail.fullName,
                      idNumber: this.userDetail.idNumber,
                      email: this.userDetail.email,
                      jobExpTotal: 0,
                      question: this.userDetail.question,
                      answer: this.userDetail.answer,
                      password: this.password.value
                    });
                    this.userDetail = {} as UserDetail;
                    this.navCtrl.pop();
                    this.alert('Successfuly registered!');
                  }).catch(error => {
                    if (error.message == 'The email address is badly formatted.') {
                      this.alert('IC/Passport Number is required!');
                    } else if ('The email address is already in use by another account.') {
                      this.alert('IC/Passport Number is already used.');
                    } else {
                      this.alert(error.message);
                    }
                  });
              } else {
                this.alert('Please complete all Details!');
              }
            } else {
              this.alert('Password must atleast contain Symbols, Number, Small and Capital letters.');
            }
          } else {
            this.alert('Email address is badly formatted.');
          }
        } else {
          this.alert('Full name is badly formatted.');
        }
      } else {
        this.alert('IC or Passport Number is badly formatted.');
      }

    } else if (this.sel == 'company') {
      if ((at == 1) && (dot) && (!space)) {
        if (passwords == 'valid') {
          if (this.userDetail.compName == "" || this.userDetail.answer == "") {
            this.alert('Please complete all Details!');
          } else {
            this.fire.auth.createUserWithEmailAndPassword(this.idNumber.value.split(' ').join("") + "@YC.COM", this.password.value)
            .then(data => {
              var user = this.fire.auth.currentUser;
              user.updateProfile({
                displayName: this.idNumber.value.split(' ').join(""),
                photoURL: ""
              }).then(function() {
                firebase.auth().signOut();
              }).catch(function(error){});

            this.userRef$ = this.database.list('users');
            this.userRef$.update(this.userDetail.compName.split(' ').join(""), {
              type: this.sel,
              photo: 'assets/default.png',
              compName: this.userDetail.compName,
              idNumber: this.userDetail.compName.split(' ').join(""),
              firstStart: "",
              firstEnd: "",
              secStart: "",
              secEnd: "",
              firstStartE: "",
              firstEndE: "",
              secStartE: "",
              secEndE: "",
              email: this.userDetail.email,
              lat: 4.504632318432753,
              long: 114.871229143155,
              question: this.userDetail.question,
              answer: this.userDetail.answer,
              password: this.password.value
            });
            this.userDetail = {} as UserDetail;
            this.navCtrl.pop();
            this.alert('Registered!');
            }).catch(error => {
              if (error.message == 'The email address is badly formatted.') {
                this.alert('Company Name is required!');
              } else if ('The email address is already in use by another account.') {
                this.alert('IC/Passport Number is already used.');
              } else {
                this.alert(error.message);
              }
            });
          }
        } else {
          this.alert('Password must atleast contain Symbols, Number, Small and Capital letters.');
        }
      } else {
        this.alert('Email address is badly formatted.');
      }
    } 
  }

  addJob() {
    if (this.jobAdd == 5 ) {
      this.jobAdd = 0;
    } else {
      this.jobAdd = this.jobAdd + 1;
    }
    
  }

}
