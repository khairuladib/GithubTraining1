import { Component, ViewChild, ElementRef } from '@angular/core';
import { App, NavController, Platform, AlertController,ActionSheetController, NavParams } from 'ionic-angular'; 
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserDetail } from './../../models/interfaces/user-details.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { LocationPage } from '../location/location';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Camera } from 'ionic-native';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  splash = true;
  tabBarElement: any;

  user: Observable<firebase.User>;
  userDetail = {} as UserDetail;
  userRef: FirebaseListObservable<UserDetail[]>;
  
  @ViewChild('fullName') fullName;
  @ViewChild('gender') gender;
  @ViewChild('color') color;
  @ViewChild('nationality') nationality;
  @ViewChild('marital') marital;
  @ViewChild('dob') dob;
  @ViewChild('liNumber') liNumber;
  @ViewChild('email') email;
  @ViewChild('contactNum') contactNum;
  @ViewChild('emNum') emNum;
  @ViewChild('address') address;
  @ViewChild('postcode') postcode;
  @ViewChild('hiQual') hiQual;
  @ViewChild('mdgree') mdgree;
  @ViewChild('degree') degree;
  @ViewChild('hnd') hnd;
  @ViewChild('diploma') diploma;
  @ViewChild('alevel') alevel;
  @ViewChild('olevel') olevel;
  @ViewChild('othQual') othQual;
  @ViewChild('qual1') qual1;
  @ViewChild('engLang') engLang;
  @ViewChild('malLang') malLang;
  @ViewChild('other1') other1;
  @ViewChild('lang1') lang1;
  @ViewChild('lang1s') lang1s;
  @ViewChild('jobExp') jobExp;
  @ViewChild('jobExpPos') jobExpPos;
  @ViewChild('jobExpYear') jobExpYear;
  @ViewChild('jobExp1') jobExp1;
  @ViewChild('jobExp1Pos') jobExp1Pos;
  @ViewChild('jobExp1Year') jobExp1Year;
  @ViewChild('jobExp2') jobExp2;
  @ViewChild('jobExp2Pos') jobExp2Pos;
  @ViewChild('jobExp2Year') jobExp2Year;
  @ViewChild('jobExp3') jobExp3;
  @ViewChild('jobExp3Pos') jobExp3Pos;
  @ViewChild('jobExp3Year') jobExp3Year;
  @ViewChild('jobExp4') jobExp4;
  @ViewChild('jobExp4Pos') jobExp4Pos;
  @ViewChild('jobExp4Year') jobExp4Year;
  @ViewChild('compName') compName;
  @ViewChild('indType') indType;
  @ViewChild('workHour') workHour;
  @ViewChild('desc') desc;
  @ViewChild('vacanOffer') vacanOffer;
  @ViewChild('compEmail') compEmail;
  @ViewChild('compcontactNum') compcontactNum;
  @ViewChild('compAddress') compAddress;
  @ViewChild('monday') monday;
  @ViewChild('tuesday') tuesday;
  @ViewChild('wednesday') wednesday;
  @ViewChild('thursday') thursday;
  @ViewChild('friday') friday;
  @ViewChild('saturday') saturday;
  @ViewChild('sunday') sunday;
  @ViewChild('except') except;
  @ViewChild('firstStart') firstStart;
  @ViewChild('firstEnd') firstEnd;
  @ViewChild('secStart') secStart;
  @ViewChild('secEnd') secEnd;
  @ViewChild('firstStartE') firstStartE;
  @ViewChild('firstEndE') firstEndE;
  @ViewChild('secStartE') secStartE;
  @ViewChild('secEndE') secEndE;

  userID: string = '';
  pphoto: any;
  upload: any;
  view: string;
  type: string;
  jobs: number = 0;
  num: number = 0;
  lat: Number;
  lng: Number;
  fstStart: string = "";
  fstEnd: string = "";
  sndStart: string = "";
  sndEnd: string = "";
  fstStartE: string = "";
  fstEndE: string = "";
  sndStartE: string = "";
  sndEndE: string = "";
  dobSet: string = "";

  constructor(public navCtrl: NavController, private fire: AngularFireAuth, public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams, private database: AngularFireDatabase,
    public platform: Platform, private app: App, public alertCtrl: AlertController ) {

    var id = fire.auth.currentUser.displayName;
    this.userID = id; 
    this.tabBarElement = document.querySelector('.tabbar');
    this.view = this.navParams.get('compId');
    this.userRef = this.database.list('users');

    var dats = firebase.database().ref('/users/'+this.userID);
      dats.child('photo').once('value', (snapshot) => {
      var item = snapshot.val();
      this.pphoto = item;
      this.upload = this.pphoto;
    });

    var dats = firebase.database().ref('/users/'+this.userID);
      dats.child('type').once('value', (snapshot) => {
      var item = snapshot.val();
      this.type = item;
    });
  }

  mapSetup(n:number) {
    var dats = firebase.database().ref('/users/'+this.userID);
      dats.child('lat').once('value', (lat) => {
        dats.child('long').once('value', (long) => {
          this.lat = lat.val();
          this.lng = long.val();
          if (n == 1) {
            this.loadMap();
          } else if (n == 2) {
            if (this.num == 1) {
              this.initMap();
            } else if (this.num == 0) {
              this.loadMap();
            }   
          }
        });
    });
  }

  ionViewDidLoad() {
    
    setTimeout(() => {
      this.splash = false;
    }, 4000);
  }

  ionViewWillEnter() {
    if (this.view != undefined) {
      this.userID = this.view;
      var dats = firebase.database().ref('/users/'+this.userID);
      dats.child('type').once('value', (snapshot) => {
        var item = snapshot.val();
        this.type = item;
        if (this.type == 'company') {
          this.mapSetup(1);
        }
      });
    } else {
      var dats = firebase.database().ref('/users/'+this.userID);
      dats.child('type').once('value', (snapshot) => {
        var item = snapshot.val();
        this.type = item;
        if (this.type == 'company') {
          this.mapSetup(2);
        }
      });
      var notify = firebase.database().ref('/users/'+this.userID);
      notify.child('newjob').once('value', (snapshot) => {
        var item = snapshot.val();
        if (item != null) {
          this.alert(item, 'newjob');
        }
      });
      notify.child('accept').once('value', (snapshot) => {
        var item = snapshot.val();
        if (item != null) {
          this.alert(item, 'accept');
        }
      });
      notify.child('reject').once('value', (snapshot) => {
        var item = snapshot.val();
        if (item != null) {
          this.alert(item, 'reject');
        }
      });
      var notify = firebase.database().ref('/users/'+this.userID);
      notify.child('newapp').once('value', (snapshot) => {
        var item = snapshot.val();
        if (item != null) {
          this.alert(item, 'newapp');
        }
      });
    }
  }

  profilePic() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose an Option:',
      buttons: [
        {
          text: 'Upload',
          handler: () => {
            this.openCamera(0)
          }
        },{
        //   text: 'Camera',
        //   handler: () => {
        //     // this.openCamera(1)
        //     this.database.list('users').update(this.userID, {
        //       photo: "data:image/jpeg;base64,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"
        //     });
        //   }
        // },{
          text: 'Delete',
          handler: () => {
            this.pphoto = 'assets/default.png'
            this.database.list('users').update(this.userID, {
              photo: this.pphoto
            });
          }
       },{
        text: 'Cancel',
        role: 'cancel'
       }
     ]
   });
   actionSheet.present();
  }

  openCamera(type){
    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: type,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };    
    Camera.getPicture(options).then((imageData) => {
      this.pphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {

    });
  }        
        
  editProfile() {
    this.num = 1;
  }

  saving() {
    this.upload = this.pphoto;
    var dot = false, space = false;
    var at = 0;   

    if (this.type == 'user') {
      var name;
      for (var i = 0; i < this.fullName.value.length; i++) {
        if ((this.fullName.value.charAt(i)+this.fullName.value.charAt(i+1)+this.fullName.value.charAt(i+2)+this.fullName.value.charAt(i+3)+this.fullName.value.charAt(i+4) == 'BINTI')
          ||(this.fullName.value.charAt(i)+this.fullName.value.charAt(i+1)+this.fullName.value.charAt(i+2)+this.fullName.value.charAt(i+3)+this.fullName.value.charAt(i+4) == ' BIN ')) {
          name = true;
        }
      } console.log('Name is'+name);

      for (var i = 0; i < this.email.value.length; i++) {
        if (this.email.value.charAt(i) == '@') {
          at = at + 1;
        } else if (this.email.value.charAt(i) == '.') {
          dot = true;
        } else if (this.email.value.charAt(i) == ' ') {
          space = true;
        }
      }
      
      if (name) {
        if ((at == 1) && (dot) && (!space) || this.email.value == "") {
          if ((parseInt(this.contactNum.value.split('+').join("")) && (this.contactNum.value.charAt(10) != "") && (this.contactNum.value.charAt(11) == "")) || (this.contactNum.value == '')) {
            if ((parseInt(this.emNum.value.split('+').join("")) && (this.emNum.value.charAt(10) != "") && (this.emNum.value.charAt(11) == "")) || (this.emNum.value == '')) {
              if (!this.othQual.value) {
                this.userRef.update(this.userID, {
                  othQual: this.othQual.value,
                  qual1: ""
                });
              } else {
                if (this.qual1.value == "") {
                  this.userRef.update(this.userID, {
                    othQual: false,
                    qual1: ""
                  });
                  this.error('Your didnt specify your other qulification.');
                } else {
                  this.userRef.update(this.userID, {
                    othQual: this.othQual.value,
                    qual1: this.qual1.value
                  });
                }
              }
              if (this.other1.value && this.lang1s.value != "" && this.lang1.value != "") {
                this.userRef.update(this.userID, {
                  other1: this.other1.value,
                  lang1: this.lang1.value,
                  lang1s: this.lang1s.value
                });
              } else {
                this.userRef.update(this.userID, {
                  other1: false,
                  lang1: "",
                  lang1s: ""
                });
              }

              if (this.dobSet != "") {
                this.userRef.update(this.userID, {
                  dob: this.dobSet
                })
              } else {
                var date = firebase.database().ref('/users/'+this.userID);
                date.child('dob').once('value', (snapshot) => {
                  var item = snapshot.val();
                  this.dobSet = item;
                });
              }

              var dats = firebase.database().ref('/users/'+this.userID);
              dats.child('photo').once('value', (snapshot) => {
                var item = snapshot.val();
                this.pphoto = item;
                this.upload = this.pphoto;
              });

              this.userRef.update(this.userID, {
                photo: this.pphoto,
                fullName: this.fullName.value,
                gender: this.gender.value,
                color: this.color.value,
                nationality: this.nationality.value,
                marital: this.marital.value,
                dob: this.dobSet,
                liNumber: this.liNumber.value,
                email: this.email.value,
                contactNum: this.contactNum.value,
                emNum: this.emNum.value,
                address: this.address.value,
                postcode: this.postcode.value,
                mdgree: this.mdgree.value,
                degree: this.degree.value,
                hnd: this.degree.value,
                diploma: this.diploma.value,
                alevel: this.alevel.value,
                olevel: this.olevel.value,
                engLang: this.engLang.value,
                malLang: this.malLang.value,
                jobExp: this.jobExp.value,
                jobExpPos: this.jobExpPos.value,
                jobExpYear: this.jobExpYear.value,
                other1: this.other1.value
              });
              
              this.num = 0;
            } else {
              this.error('Emergency Number are badly formatted.');
            }
          } else {
            this.error('Contact Number are badly formatted.');
          }
        } else {
          this.error('Email address are badly formatted.');
        }
      } else {
        this.error('Fullname are badly formatted.');
      }
      
    } else if (this.type == 'company') {
        for (var i = 0; i < this.compEmail.value.length; i++) {
          if (this.compEmail.value.charAt(i) == '@') {
            at = at + 1;
          } else if (this.compEmail.value.charAt(i) == '.') {
            dot = true;
          } else if (this.compEmail.value.charAt(i) == ' ') {
            space = true;
          }
        }
      if ((at == 1) && (dot) && (!space) || this.compEmail.value == "") {
        if ((parseInt(this.compcontactNum.value.split('+').join("")) && (this.compcontactNum.value.charAt(10) != "") && (this.compcontactNum.value.charAt(11) == "")) || (this.compcontactNum.value == '')) {
          this.userRef.update(this.userID, {
            photo: this.pphoto,
            compName: this.compName.value,
            indType: this.indType.value,
            desc: this.desc.value,
            email: this.compEmail.value,
            contactNum: this.compcontactNum.value,
            address: this.compAddress.value,
            postcode: this.postcode.value,
            monday: this.monday.value,
            tuesday: this.tuesday.value,
            wednesday: this.wednesday.value,
            thursday: this.thursday.value,
            friday: this.friday.value,
            saturday: this.saturday.value,
            sunday: this.sunday.value,
            except: this.except.value,
            firstStart: this.fstStart,
            firstEnd: this.fstEnd,
            secStart: this.sndStart,
            secEnd: this.sndEnd,
            firstStartE: this.fstStartE,
            firstEndE: this.fstEndE,
            secStartE: this.sndStartE,
            secEndE: this.sndEndE,    
          });
          var dats = firebase.database().ref('/users/'+this.userID);
          dats.child('photo').once('value', (snapshot) => {
            var item = snapshot.val();
            this.pphoto = item;
            this.upload = this.pphoto;
          });
          this.num = 0;
        } else {
          this.error('Contact Number are badly formatted.');
        }
      } else {
        this.error('Email address are badly formatted.');
      }
    }
  }

  canceling() {
    this.num = 0;
    this.database.list('users').update(this.userID, {
      photo: this.upload,
    });
    var dats = firebase.database().ref('/users/'+this.userID);
      dats.child('photo').once('value', (snapshot) => {
      var item = snapshot.val();
      this.pphoto = item;
      this.upload = this.pphoto;
    });
  }

  logoutUser(userDetail: UserDetail) {
    this.fire.auth.signOut(); 
    this.app.getRootNav().setRoot(LoginPage);
  }

  returnUser() {
    var id = this.fire.auth.currentUser.displayName;
    this.userID = id; 
    this.view = undefined;
    this.navCtrl.pop();
  }

  alert(message: string, notif: string) {
    this.alertCtrl.create({
      title: 'Notification!',
      subTitle: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.database.list('users/'+this.userID).remove(notif);
        }
      }],
    }).present();
  }

  error(message: string) {
    this.alertCtrl.create({
      title: 'Notification!',
      subTitle: message,
      buttons: [{
        text: 'OK',
        role: 'cancel'
      }],
    }).present();
  }

  editLocation() {
    this.navCtrl.push(LocationPage);
  }

  loadMap(){
    let latLng = new google.maps.LatLng(this.lat, this.lng);
    let mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var locations = [
      ['Company Name', this.lat, this.lng]
    ];
    
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: this.map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(this.map, marker);
        }
      })(marker, i));
    }
  }

  initMap() {
    var id = this.fire.auth.currentUser.displayName;
    //The center location of our map.
    var centerOfMap = new google.maps.LatLng(this.lat, this.lng);
 
    //Map options.
    var options = {
      center: centerOfMap, //Set center.
      zoom: 18, //The zoom value.
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    //Create the map object.
    this.map = new google.maps.Map(this.mapElement.nativeElement, options);
 
    //Listen for any clicks on the map.
    google.maps.event.addListener(this.map, 'click', function(event) {                
      //Get the location that the user clicked.
      var clickedLocation = event.latLng;
      //If the marker hasn't been added.
      if(this.marker === false){
        //Create the marker.
        this.marker = new google.maps.Marker({
            position: clickedLocation,
            map: this.map,
            draggable: true //make it draggable
        });
        //Listen for drag events!
        google.maps.event.addListener(this.marker, 'dragend', function(event){
            this.markerLocation(this.marker);
        });
      } else{
        //Marker has already been added, so just change its location.
        this.lat = clickedLocation.lat();
        this.lng = clickedLocation.lng();
        firebase.database().ref('/users/'+id).update({
          lat: this.lat,
          long: this.lng
        }).then(res =>{
          // THE LOCATION IS SAVED, DO YOUR STUFF
        })     
      }
  });
}
        
  //This function will get the marker's current location and then add the lat/long
  //values to our textfields so that we can save the location.
  markerLocation(marker){
    //Get location.
    var currentLocation = marker.getPosition();
    //Add lat and lng values to a field that we can save.
    this.mapElement.nativeElement = currentLocation.lat(); //latitude
    this.mapElement.nativeElement = currentLocation.lng(); //longitude
  }

  jobAdd(jobExpTotal) {
    if (jobExpTotal == 0) {
      this.database.list('users').update(this.userID, {
        jobExp: this.jobExp.value,
        jobExpPos: this.jobExpPos.value,
        jobExpYear: this.jobExpYear.value,
        jobExp1: "",
        jobExp1Pos: "",
        jobExp1Year: "",
        jobExp2: "",
        jobExp2Pos: "",
        jobExp2Year: "",
        jobExp3: "",
        jobExp3Pos: "",
        jobExp3Year: "",
        jobExp4: "",
        jobExp4Pos: "",
        jobExp4Year: "",
        jobExpTotal: jobExpTotal + 1
      });
    } else if (jobExpTotal == 1) {
      this.database.list('users').update(this.userID, {
        jobExp1: this.jobExp1.value,
        jobExp1Pos: this.jobExp1Pos.value,
        jobExp1Year: this.jobExp1Year.value,
        jobExpTotal: jobExpTotal + 1
      });
    } else if (jobExpTotal == 2) {
      this.database.list('users').update(this.userID, {
        jobExp2: this.jobExp2.value,
        jobExp2Pos: this.jobExp2Pos.value,
        jobExp2Year: this.jobExp2Year.value,
        jobExpTotal: jobExpTotal + 1
      });
    } else if (jobExpTotal == 3) {
      this.database.list('users').update(this.userID, {
        jobExp3: this.jobExp3.value,
        jobExp3Pos: this.jobExp3Pos.value,
        jobExp3Year: this.jobExp3Year.value,
        jobExpTotal: jobExpTotal + 1
      });
    } else if (jobExpTotal == 4) {
      this.database.list('users').update(this.userID, {
        jobExp4: this.jobExp4.value,
        jobExp4Pos: this.jobExp4Pos.value,
        jobExp4Year: this.jobExp4Year.value,
        jobExpTotal: jobExpTotal + 1
      });
    } 
  }
}
