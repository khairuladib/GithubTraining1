import { Component, ViewChild, ElementRef } from '@angular/core';
import { App, IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { LoginPage } from '../login/login';

declare var google;

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

	@ViewChild('map') mapElement: ElementRef;
 	map: any;

 	lat: Number;
  	lng: Number;

  constructor(public navCtrl: NavController, private app: App, private fire: AngularFireAuth, private database: AngularFireDatabase, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    var id = this.fire.auth.currentUser.displayName;
    var dats = firebase.database().ref('/users/'+id);
      dats.child('lat').once('value', (lat) => {
        dats.child('long').once('value', (long) => {
          this.lat = lat.val();
          this.lng = long.val();
          //The center location of our map.
	      var centerOfMap = new google.maps.LatLng(this.lat, this.lng);
	   
	      //Map options.
	      var options = {
	        center: centerOfMap, //Set center.
	        zoom: 15, //The zoom value.
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
	            console.log('a: '+clickedLocation);
	            console.log(event.latLng.lat());
	            this.lat = clickedLocation.lat();
	            this.lng = clickedLocation.lng();
	            console.log('a: '+this.lat+', '+this.lng);
	            firebase.database().ref('/users/'+id).update({
		                  lat: this.lat,
		                  long: this.lng
		                }).then(res =>{
		                	alert('You have set the new Location, map location will be updated once you have re-login.');
		                  // THE LOCATION IS SAVED, DO YOUR STUFF
		                })
	        }
	        
	      });
        });
    });
      
  }

  logout() {
  	this.fire.auth.signOut();
  	this.app.getRootNav().setRoot(LoginPage);
  }

}
