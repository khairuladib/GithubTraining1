webpackJsonp([3],{

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vacancy_vacancy__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(app, fire, alertCtrl, navCtrl, navParams) {
        this.app = app;
        this.fire = fire;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__vacancy_vacancy__["a" /* VacancyPage */];
        this.username = '';
        this.userParams = {
            usercca: ''
        };
        this.navParams = navParams;
        console.log(this.navParams);
        this.username = this.navParams.data;
        this.userParams.usercca = this.navParams.get('username');
    }
    TabsPage.prototype.logoutUser = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "You are about to Log Out, do you want to proceed?.",
            buttons: [
                {
                    text: "Yes",
                    handler: function () {
                        _this.fire.auth.signOut();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */]);
                    }
                },
                {
                    text: "No",
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], TabsPage.prototype, "uname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], TabsPage.prototype, "password", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark" selectedIndex="0" #mainContent>\n   \n  <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="person" [rootParams]="username"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Vacancies" tabIcon="briefcase" [rootParams]="userParams"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_location__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_native__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, fire, actionSheetCtrl, navParams, database, platform, app, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fire = fire;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.database = database;
        this.platform = platform;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.splash = true;
        this.userDetail = {};
        this.userID = '';
        this.jobs = 0;
        this.num = 0;
        this.fstStart = "";
        this.fstEnd = "";
        this.sndStart = "";
        this.sndEnd = "";
        this.fstStartE = "";
        this.fstEndE = "";
        this.sndStartE = "";
        this.sndEndE = "";
        this.dobSet = "";
        var id = fire.auth.currentUser.displayName;
        this.userID = id;
        this.tabBarElement = document.querySelector('.tabbar');
        this.view = this.navParams.get('compId');
        this.userRef = this.database.list('users');
        var dats = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
        dats.child('photo').once('value', function (snapshot) {
            var item = snapshot.val();
            _this.pphoto = item;
            _this.upload = _this.pphoto;
        });
        var dats = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
        dats.child('type').once('value', function (snapshot) {
            var item = snapshot.val();
            _this.type = item;
        });
    }
    HomePage.prototype.mapSetup = function (n) {
        var _this = this;
        var dats = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
        dats.child('lat').once('value', function (lat) {
            dats.child('long').once('value', function (long) {
                _this.lat = lat.val();
                _this.lng = long.val();
                if (n == 1) {
                    _this.loadMap();
                }
                else if (n == 2) {
                    if (_this.num == 1) {
                        _this.initMap();
                    }
                    else if (_this.num == 0) {
                        _this.loadMap();
                    }
                }
            });
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.splash = false;
        }, 4000);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.view != undefined) {
            this.userID = this.view;
            var dats = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
            dats.child('type').once('value', function (snapshot) {
                var item = snapshot.val();
                _this.type = item;
                if (_this.type == 'company') {
                    _this.mapSetup(1);
                }
            });
        }
        else {
            var dats = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
            dats.child('type').once('value', function (snapshot) {
                var item = snapshot.val();
                _this.type = item;
                if (_this.type == 'company') {
                    _this.mapSetup(2);
                }
            });
            var notify = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
            notify.child('newjob').once('value', function (snapshot) {
                var item = snapshot.val();
                if (item != null) {
                    _this.alert(item, 'newjob');
                }
            });
            notify.child('accept').once('value', function (snapshot) {
                var item = snapshot.val();
                if (item != null) {
                    _this.alert(item, 'accept');
                }
            });
            notify.child('reject').once('value', function (snapshot) {
                var item = snapshot.val();
                if (item != null) {
                    _this.alert(item, 'reject');
                }
            });
            var notify = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
            notify.child('newapp').once('value', function (snapshot) {
                var item = snapshot.val();
                if (item != null) {
                    _this.alert(item, 'newapp');
                }
            });
        }
    };
    HomePage.prototype.profilePic = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose an Option:',
            buttons: [
                {
                    text: 'Upload',
                    handler: function () {
                        _this.openCamera(0);
                    }
                }, {
                    //   text: 'Camera',
                    //   handler: () => {
                    //     // this.openCamera(1)
                    //     this.database.list('users').update(this.userID, {
                    //       photo: "data:image/jpeg;base64,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"
                    //     });
                    //   }
                    // },{
                    text: 'Delete',
                    handler: function () {
                        _this.pphoto = 'assets/default.png';
                        _this.database.list('users').update(_this.userID, {
                            photo: _this.pphoto
                        });
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.openCamera = function (type) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: __WEBPACK_IMPORTED_MODULE_7_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            sourceType: type,
            allowEdit: true,
            encodingType: __WEBPACK_IMPORTED_MODULE_7_ionic_native__["a" /* Camera */].EncodingType.JPEG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        __WEBPACK_IMPORTED_MODULE_7_ionic_native__["a" /* Camera */].getPicture(options).then(function (imageData) {
            _this.pphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
        });
    };
    HomePage.prototype.editProfile = function () {
        this.num = 1;
    };
    HomePage.prototype.saving = function () {
        var _this = this;
        this.upload = this.pphoto;
        var dot = false, space = false;
        var at = 0;
        if (this.type == 'user') {
            var name;
            for (var i = 0; i < this.fullName.value.length; i++) {
                if ((this.fullName.value.charAt(i) + this.fullName.value.charAt(i + 1) + this.fullName.value.charAt(i + 2) + this.fullName.value.charAt(i + 3) + this.fullName.value.charAt(i + 4) == 'BINTI')
                    || (this.fullName.value.charAt(i) + this.fullName.value.charAt(i + 1) + this.fullName.value.charAt(i + 2) + this.fullName.value.charAt(i + 3) + this.fullName.value.charAt(i + 4) == ' BIN ')) {
                    name = true;
                }
            }
            console.log('Name is' + name);
            for (var i = 0; i < this.email.value.length; i++) {
                if (this.email.value.charAt(i) == '@') {
                    at = at + 1;
                }
                else if (this.email.value.charAt(i) == '.') {
                    dot = true;
                }
                else if (this.email.value.charAt(i) == ' ') {
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
                            }
                            else {
                                if (this.qual1.value == "") {
                                    this.userRef.update(this.userID, {
                                        othQual: false,
                                        qual1: ""
                                    });
                                    this.error('Your didnt specify your other qulification.');
                                }
                                else {
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
                            }
                            else {
                                this.userRef.update(this.userID, {
                                    other1: false,
                                    lang1: "",
                                    lang1s: ""
                                });
                            }
                            if (this.dobSet != "") {
                                this.userRef.update(this.userID, {
                                    dob: this.dobSet
                                });
                            }
                            else {
                                var date = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
                                date.child('dob').once('value', function (snapshot) {
                                    var item = snapshot.val();
                                    _this.dobSet = item;
                                });
                            }
                            var dats = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
                            dats.child('photo').once('value', function (snapshot) {
                                var item = snapshot.val();
                                _this.pphoto = item;
                                _this.upload = _this.pphoto;
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
                        }
                        else {
                            this.error('Emergency Number are badly formatted.');
                        }
                    }
                    else {
                        this.error('Contact Number are badly formatted.');
                    }
                }
                else {
                    this.error('Email address are badly formatted.');
                }
            }
            else {
                this.error('Fullname are badly formatted.');
            }
        }
        else if (this.type == 'company') {
            for (var i = 0; i < this.compEmail.value.length; i++) {
                if (this.compEmail.value.charAt(i) == '@') {
                    at = at + 1;
                }
                else if (this.compEmail.value.charAt(i) == '.') {
                    dot = true;
                }
                else if (this.compEmail.value.charAt(i) == ' ') {
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
                    var dats = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
                    dats.child('photo').once('value', function (snapshot) {
                        var item = snapshot.val();
                        _this.pphoto = item;
                        _this.upload = _this.pphoto;
                    });
                    this.num = 0;
                }
                else {
                    this.error('Contact Number are badly formatted.');
                }
            }
            else {
                this.error('Email address are badly formatted.');
            }
        }
    };
    HomePage.prototype.canceling = function () {
        var _this = this;
        this.num = 0;
        this.database.list('users').update(this.userID, {
            photo: this.upload,
        });
        var dats = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + this.userID);
        dats.child('photo').once('value', function (snapshot) {
            var item = snapshot.val();
            _this.pphoto = item;
            _this.upload = _this.pphoto;
        });
    };
    HomePage.prototype.logoutUser = function (userDetail) {
        this.fire.auth.signOut();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.returnUser = function () {
        var id = this.fire.auth.currentUser.displayName;
        this.userID = id;
        this.view = undefined;
        this.navCtrl.pop();
    };
    HomePage.prototype.alert = function (message, notif) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Notification!',
            subTitle: message,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        _this.database.list('users/' + _this.userID).remove(notif);
                    }
                }],
        }).present();
    };
    HomePage.prototype.error = function (message) {
        this.alertCtrl.create({
            title: 'Notification!',
            subTitle: message,
            buttons: [{
                    text: 'OK',
                    role: 'cancel'
                }],
        }).present();
    };
    HomePage.prototype.editLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__location_location__["a" /* LocationPage */]);
    };
    HomePage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(this.lat, this.lng);
        var mapOptions = {
            center: latLng,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
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
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(this.map, marker);
                };
            })(marker, i));
        }
    };
    HomePage.prototype.initMap = function () {
        var id = this.fire.auth.currentUser.displayName;
        //The center location of our map.
        var centerOfMap = new google.maps.LatLng(this.lat, this.lng);
        //Map options.
        var options = {
            center: centerOfMap,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        //Create the map object.
        this.map = new google.maps.Map(this.mapElement.nativeElement, options);
        //Listen for any clicks on the map.
        google.maps.event.addListener(this.map, 'click', function (event) {
            //Get the location that the user clicked.
            var clickedLocation = event.latLng;
            //If the marker hasn't been added.
            if (this.marker === false) {
                //Create the marker.
                this.marker = new google.maps.Marker({
                    position: clickedLocation,
                    map: this.map,
                    draggable: true //make it draggable
                });
                //Listen for drag events!
                google.maps.event.addListener(this.marker, 'dragend', function (event) {
                    this.markerLocation(this.marker);
                });
            }
            else {
                //Marker has already been added, so just change its location.
                this.lat = clickedLocation.lat();
                this.lng = clickedLocation.lng();
                __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + id).update({
                    lat: this.lat,
                    long: this.lng
                }).then(function (res) {
                    // THE LOCATION IS SAVED, DO YOUR STUFF
                });
            }
        });
    };
    //This function will get the marker's current location and then add the lat/long
    //values to our textfields so that we can save the location.
    HomePage.prototype.markerLocation = function (marker) {
        //Get location.
        var currentLocation = marker.getPosition();
        //Add lat and lng values to a field that we can save.
        this.mapElement.nativeElement = currentLocation.lat(); //latitude
        this.mapElement.nativeElement = currentLocation.lng(); //longitude
    };
    HomePage.prototype.jobAdd = function (jobExpTotal) {
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
        }
        else if (jobExpTotal == 1) {
            this.database.list('users').update(this.userID, {
                jobExp1: this.jobExp1.value,
                jobExp1Pos: this.jobExp1Pos.value,
                jobExp1Year: this.jobExp1Year.value,
                jobExpTotal: jobExpTotal + 1
            });
        }
        else if (jobExpTotal == 2) {
            this.database.list('users').update(this.userID, {
                jobExp2: this.jobExp2.value,
                jobExp2Pos: this.jobExp2Pos.value,
                jobExp2Year: this.jobExp2Year.value,
                jobExpTotal: jobExpTotal + 1
            });
        }
        else if (jobExpTotal == 3) {
            this.database.list('users').update(this.userID, {
                jobExp3: this.jobExp3.value,
                jobExp3Pos: this.jobExp3Pos.value,
                jobExp3Year: this.jobExp3Year.value,
                jobExpTotal: jobExpTotal + 1
            });
        }
        else if (jobExpTotal == 4) {
            this.database.list('users').update(this.userID, {
                jobExp4: this.jobExp4.value,
                jobExp4Pos: this.jobExp4Pos.value,
                jobExp4Year: this.jobExp4Year.value,
                jobExpTotal: jobExpTotal + 1
            });
        }
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], HomePage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fullName'),
    __metadata("design:type", Object)
], HomePage.prototype, "fullName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('gender'),
    __metadata("design:type", Object)
], HomePage.prototype, "gender", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('color'),
    __metadata("design:type", Object)
], HomePage.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nationality'),
    __metadata("design:type", Object)
], HomePage.prototype, "nationality", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('marital'),
    __metadata("design:type", Object)
], HomePage.prototype, "marital", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('dob'),
    __metadata("design:type", Object)
], HomePage.prototype, "dob", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('liNumber'),
    __metadata("design:type", Object)
], HomePage.prototype, "liNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('email'),
    __metadata("design:type", Object)
], HomePage.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('contactNum'),
    __metadata("design:type", Object)
], HomePage.prototype, "contactNum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('emNum'),
    __metadata("design:type", Object)
], HomePage.prototype, "emNum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('address'),
    __metadata("design:type", Object)
], HomePage.prototype, "address", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('postcode'),
    __metadata("design:type", Object)
], HomePage.prototype, "postcode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('hiQual'),
    __metadata("design:type", Object)
], HomePage.prototype, "hiQual", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('mdgree'),
    __metadata("design:type", Object)
], HomePage.prototype, "mdgree", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('degree'),
    __metadata("design:type", Object)
], HomePage.prototype, "degree", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('hnd'),
    __metadata("design:type", Object)
], HomePage.prototype, "hnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('diploma'),
    __metadata("design:type", Object)
], HomePage.prototype, "diploma", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('alevel'),
    __metadata("design:type", Object)
], HomePage.prototype, "alevel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('olevel'),
    __metadata("design:type", Object)
], HomePage.prototype, "olevel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('othQual'),
    __metadata("design:type", Object)
], HomePage.prototype, "othQual", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('qual1'),
    __metadata("design:type", Object)
], HomePage.prototype, "qual1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('engLang'),
    __metadata("design:type", Object)
], HomePage.prototype, "engLang", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('malLang'),
    __metadata("design:type", Object)
], HomePage.prototype, "malLang", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('other1'),
    __metadata("design:type", Object)
], HomePage.prototype, "other1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lang1'),
    __metadata("design:type", Object)
], HomePage.prototype, "lang1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lang1s'),
    __metadata("design:type", Object)
], HomePage.prototype, "lang1s", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExpPos'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExpPos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExpYear'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExpYear", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp1'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp1Pos'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp1Pos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp1Year'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp1Year", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp2'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp2Pos'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp2Pos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp2Year'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp2Year", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp3'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp3Pos'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp3Pos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp3Year'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp3Year", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp4'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp4", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp4Pos'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp4Pos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobExp4Year'),
    __metadata("design:type", Object)
], HomePage.prototype, "jobExp4Year", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('compName'),
    __metadata("design:type", Object)
], HomePage.prototype, "compName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('indType'),
    __metadata("design:type", Object)
], HomePage.prototype, "indType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('workHour'),
    __metadata("design:type", Object)
], HomePage.prototype, "workHour", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('desc'),
    __metadata("design:type", Object)
], HomePage.prototype, "desc", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('vacanOffer'),
    __metadata("design:type", Object)
], HomePage.prototype, "vacanOffer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('compEmail'),
    __metadata("design:type", Object)
], HomePage.prototype, "compEmail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('compcontactNum'),
    __metadata("design:type", Object)
], HomePage.prototype, "compcontactNum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('compAddress'),
    __metadata("design:type", Object)
], HomePage.prototype, "compAddress", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('monday'),
    __metadata("design:type", Object)
], HomePage.prototype, "monday", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('tuesday'),
    __metadata("design:type", Object)
], HomePage.prototype, "tuesday", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('wednesday'),
    __metadata("design:type", Object)
], HomePage.prototype, "wednesday", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('thursday'),
    __metadata("design:type", Object)
], HomePage.prototype, "thursday", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('friday'),
    __metadata("design:type", Object)
], HomePage.prototype, "friday", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('saturday'),
    __metadata("design:type", Object)
], HomePage.prototype, "saturday", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('sunday'),
    __metadata("design:type", Object)
], HomePage.prototype, "sunday", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('except'),
    __metadata("design:type", Object)
], HomePage.prototype, "except", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('firstStart'),
    __metadata("design:type", Object)
], HomePage.prototype, "firstStart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('firstEnd'),
    __metadata("design:type", Object)
], HomePage.prototype, "firstEnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('secStart'),
    __metadata("design:type", Object)
], HomePage.prototype, "secStart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('secEnd'),
    __metadata("design:type", Object)
], HomePage.prototype, "secEnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('firstStartE'),
    __metadata("design:type", Object)
], HomePage.prototype, "firstStartE", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('firstEndE'),
    __metadata("design:type", Object)
], HomePage.prototype, "firstEndE", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('secStartE'),
    __metadata("design:type", Object)
], HomePage.prototype, "secStartE", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('secEndE'),
    __metadata("design:type", Object)
], HomePage.prototype, "secEndE", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\home\home.html"*/'<ion-content padding>\n  <!-- Viewing User and Company Information -->\n  <content *ngIf="num == 0">\n    <button *ngIf="view == undefined" (click)="logoutUser()" ion-button color="dark" float-left>Log Out</button>\n    <button *ngIf="view != undefined" (click)="returnUser()" ion-button color="dark" float-right>Return</button>\n    <button *ngIf="view == undefined" (click)="editProfile()" ion-button color="dark" float-right>Edit Profile</button>\n    <h1 *ngIf="this.type == \'user\'" style="color:#000000;text-align:center;"><br/>\n      CURRICULUM VITAE (CV)\n    </h1>\n    <h1 *ngIf="this.type == \'company\'" style="color:#000000;text-align:center;"><br\>\n      COMPANY INFORMATION\n    </h1>\n    <div style="width:35%;height:150px;background-color:#e8ebef;" float-right>\n      <div *ngFor="let item of userRef | async">\n        <img style="height: 99%; width: 99%;" *ngIf="item.idNumber == userID" [src]="item.photo"/>\n      </div>\n      </div>\n\n    <ion-list *ngFor="let item of userRef | async" style="width:63%;">\n\n      <div *ngIf="item.idNumber == userID">\n        <div *ngIf="item.type == \'user\'"><div></div>\n        <h6 style="text-align:center;background-color:#e8ebef;"><b>PERSONAL DETAILS</b></h6>\n        <h5 style="text-align:left;background-color:#e8ebef;"><u>Name:</u><br/>{{item.fullName}}</h5>\n        <h5 style="text-align:left;background-color:#e8ebef;"><u>Gender:</u><br/>{{item.gender}}</h5>\n        </div>\n        <div *ngIf="item.type == \'company\'"><div></div>\n        <h6 style="text-align:center;background-color:#e8ebef;"><b>COMPANY DETAILS</b></h6>\n        <h5 style="text-align:left;background-color:#e8ebef;"><u>Company Name:</u><br/>{{item.compName}}</h5>\n        <h5 style="text-align:left;background-color:#e8ebef;"><u>Industrial Type:</u><br/>{{item.indType}}</h5>\n        </div>\n      </div>\n    </ion-list>\n    <div *ngFor="let item of userRef | async" style="width:100%;">\n      <div *ngIf="item.idNumber == userID">\n        <div *ngIf="item.type == \'user\'">\n          <h5 style="text-align:left;background-color:#e8ebef;" float-lef><u>IC/Passport Number:</u><br/>{{item.idNumber}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>IC Color:</u><br/>{{item.color}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Nationality:</u><br/>{{item.nationality}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Marital Status:</u><br/>{{item.marital}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Date of Birth:</u><br/>{{item.dob}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Driving License:</u><br/>{{item.liNumber}}</h5><br/>\n          \n          <div style="background-color: black;height: 2px;"></div>\n          <h6 style="text-align:center;background-color:#e8ebef;"><b>CONTACT DETAILS</b></h6>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Email:</u><br/>{{item.email}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Contact Number:</u><br/>{{item.contactNum}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Emergency Contact Number:</u><br/>{{item.emNum}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Address:</u><br/>{{item.address}} {{item.postcode}}</h5><br/>\n          <div style="background-color: black;height: 2px;"></div>\n          <h6 style="text-align:center;background-color:#e8ebef;"><b>QUALIFICATION SKILLS</b></h6>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u> Qualifications:</u>\n            <div *ngIf="item.mdgree">+ Maste Degree</div>\n            <div *ngIf="item.degree">+ Degree</div>\n            <div *ngIf="item.hnd">+ Higher Diploma</div>\n            <div *ngIf="item.diploma">+ Diploma</div>\n            <div *ngIf="item.alevel">+ A\'Level</div>\n            <div *ngIf="item.olevel">+ O\'Level</div>\n            <div *ngIf="item.othQual">+ {{item.qual1}}</div></h5><br/>\n          <div style="background-color: black;height: 2px;"></div>\n\n          <h6 style="text-align:center;background-color:#e8ebef;"><b>LANGUAGE SKILLS</b></h6>\n          <h5 *ngIf="(item.engLang != undefined) && (item.engLang != \'\')" style="text-align:left;background-color:#e8ebef;"><u>English Language:</u><br/>{{item.engLang}}</h5>\n          <h5 *ngIf="(item.malLang != undefined) && (item.malLang != \'\')" style="text-align:left;background-color:#e8ebef;"><u>Malay Language:</u><br/>{{item.malLang}}</h5>\n          <h5 *ngIf="(item.lang1s != undefined) && (item.lang1s != \'\')" style="text-align:left;background-color:#e8ebef;"><u>{{item.lang1}}:</u><br/>{{item.lang1s}}</h5><br/>\n          <div style="background-color: black;height: 2px;"></div>\n\n          <h6 style="text-align:center;background-color:#e8ebef;"><b>JOB EXPERIENCE</b></h6>\n          <h5 *ngIf="item.jobExp != \'\' && item.jobExp != undefined" style="text-align:left;background-color:#e8ebef;"><u>Company Name:</u><br/>{{item.jobExp}}\n            <br/>as {{item.jobExpPos}} for {{item.jobExpYear}}</h5>\n          <h5 *ngIf="item.jobExp1 != \'\' && item.jobExp1 != undefined" style="text-align:left;background-color:#e8ebef;"><u>Company Name:</u><br/>{{item.job1Exp}}\n            <br/>as {{item.jobExp1Pos}} for {{item.jobExp1Year}}</h5>\n            <h5 *ngIf="item.jobExp2 != \'\' && item.jobExp2 != undefined" style="text-align:left;background-color:#e8ebef;"><u>Company Name:</u><br/>{{item.jobExp2}}\n            <br/>as {{item.jobExp2Pos}} for {{item.jobExp2Year}}</h5>\n            <h5 *ngIf="item.jobExp3 != \'\' && item.jobExp3 != undefined" style="text-align:left;background-color:#e8ebef;"><u>Company Name:</u><br/>{{item.jobExp3}}\n            <br/>as {{item.jobExp3Pos}} for {{item.jobExp3Year}}</h5>\n            <h5 *ngIf="item.jobExp4 != \'\' && item.jobExp4 != undefined" style="text-align:left;background-color:#e8ebef;"><u>Company Name:</u><br/>{{item.jobExp4}}\n            <br/>as {{item.jobExp4Pos}} for {{item.jobExp4Year}}</h5>\n          <div style="background-color: black;height: 2px;"></div>\n        </div>\n      </div>\n\n       <div *ngIf="item.idNumber == userID">\n        <div *ngIf="item.type == \'company\'">\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Operation Time:</u>\n            <br/><i *ngIf="item.monday">Monday </i>\n            <i *ngIf="item.tuesday">Tuesday</i>\n            <i *ngIf="item.wednesday">Wednesday</i>\n            <i *ngIf="item.thursday">Thursday</i>\n            <i *ngIf="item.friday">Friday</i>\n            <i *ngIf="item.saturday">Saturday</i>\n            <i *ngIf="item.sunday">Sunday</i>\n            <br/><div *ngIf="item.firstStart != \'\' && item.firstEnd != \'\'">Morning: {{item.firstStart}} until {{item.firstEnd}}</div>\n            <div *ngIf="item.secStart != \'\' && item.sectEnd != \'\'">Afternoon: {{item.secStart}} until {{item.secEnd}}</div>\n            <div *ngIf="item.firstStart == \'\' || item.firstEnd == \'\'">Morning: N/A</div>\n            <div *ngIf="item.secStart == \'\' || item.secEnd == \'\'">Afternoon: N/A</div><br/>\n            <div *ngIf="item.except != \'\' && item.except != undefined"><i>Exception: {{item.except}}</i></div>\n            <div *ngIf="item.firstStartE != \'\' && item.firstEndE != \'\' && item.firstStartE != undefined && item.firstEndE != undefined">Morning: {{item.firstStartE}} until {{item.firstEndE}}</div>\n            <div *ngIf="item.secStartE != \'\' && item.sectEndE != \'\' && item.secStartE != undefined && item.sectEndE != undefined">Afternoon: {{item.secStartE}} until {{item.secEndE}}</div>\n          </h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>About Company:</u><br/>{{item.desc}}</h5>\n          <div style="background-color: black;height: 2px;"></div>\n          <h6 style="text-align:center;background-color:#e8ebef;"><b>CONTACT DETAILS</b></h6>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Email:</u><br/>{{item.email}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Contact Number:</u><br/>{{item.contactNum}}</h5>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Address:</u><br/>{{item.address}} {{item.postcode}}</h5><br/>\n          <h5 style="text-align:left;background-color:#e8ebef;"><u>Location:</u></h5>\n        </div>\n      </div>\n    </div>\n  </content>\n  \n  <!-- Editing User and Company Information -->\n  <content *ngIf="num == 1"><form>\n    <div *ngFor="let item of userRef | async">\n      <div *ngIf="item.idNumber == userID">\n        <button (click)="saving()" ion-button color="dark" float-left>SAVE</button>\n        <button (click)="canceling()" ion-button color="dark" float-right>CANCEL</button>\n\n        <h1 *ngIf="this.type == \'user\'" style="color:#000000;text-align:center;"><br/><br/>\n          CURRICULUM VITAE (CV)\n        </h1>\n        <h1 *ngIf="this.type == \'company\'" style="color:#000000;text-align:center;"><br\><br\>\n          COMPANY INFORMATION\n        </h1>\n\n        <div style="width:35%;height:150px;background-color:#e8ebef;" float-right>\n          <img [src]="item.photo" width="99%" (click)="profilePic(item.photo)"/>\n        </div>\n\n        <ion-list *ngFor="let item of userRef | async" style="width:63%;">\n          <div *ngIf="item.idNumber == userID">\n            <div *ngIf="item.type == \'user\'"><div></div>\n              <h6 style="text-align:center;background-color:#e8ebef;"><b>PERSONAL DETAILS</b></h6>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Full Name:</ion-label>\n                <ion-input type="text" style="color:#000000;" #fullName [(ngModel)]="item.fullName" (ngModelChange)="item.fullName = $event.toLocaleUpperCase()" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Gender:</ion-label>\n                <ion-select style="color:#000000;border-bottom: solid lime 0.0165px;" #gender [(ngModel)]="item.gender" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Female">Female</ion-option>\n                  <ion-option value="Male">Male</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n            <div *ngIf="item.type == \'company\'"><div></div>\n              <h6 style="text-align:center;background-color:#e8ebef;"><b>COMPANY DETAILS</b></h6>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Company Name:</ion-label>\n                <ion-input type="text" disabled="true" style="color:#000000;" #compName [(ngModel)]="item.compName" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Industrial Type:</ion-label>\n                <ion-select #indType [(ngModel)]="userDetail.indType" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Private">Private</ion-option>\n                  <ion-option value="Government">Government</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </div>\n        </ion-list>\n        <div *ngFor="let item of userRef | async" style="width:100%;">\n          <div *ngIf="item.idNumber == userID">\n            <div *ngIf="item.type == \'user\'">\n              <ion-item>\n                <ion-label floating>IC/Passport Number</ion-label>\n                  <ion-input type="text" disabled="true" [(ngModel)]="item.idNumber" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item >\n                <ion-label>Color</ion-label>\n                  <ion-select #color [(ngModel)]="item.color" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Green">G - Green</ion-option>\n                  <ion-option value="Red">R - Red</ion-option>\n                  <ion-option value="Yellow">Y - Yellow</ion-option>\n                  <ion-option value="Purple">P - Purple</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Nationality:</ion-label>\n                <ion-select #nationality [(ngModel)]="item.nationality" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="America">America</ion-option>\n                  <ion-option value="British">British</ion-option>\n                  <ion-option value="Brunei">Brunei</ion-option>\n                  <ion-option value="Chinese">Chinese</ion-option>\n                  <ion-option value="India">India</ion-option>\n                  <ion-option value="Indonesia">Indonesia</ion-option>\n                  <ion-option value="Malaysia">Malaysia</ion-option>\n                  <ion-option value="Singapore">Singapore</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label floating>Marital Status:</ion-label>\n                  <ion-select #marital [(ngModel)]="item.marital" style="border-bottom: solid lime 0.0165px;" [ngModelOptions]="{standalone: true}">\n                    <ion-option value="Single">Single</ion-option>\n                    <ion-option value="Married">Married</ion-option>\n                    <ion-option value="Divorced">Divorced</ion-option>\n                  </ion-select>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label float-up>Date of Birth:</ion-label>\n                <ion-datetime displayFormat="DD/MM/YYYY" max="2000" style="border-bottom: solid lime 0.0165px;" #dob [(ngModel)]="dobSet" [ngModelOptions]="{standalone: true}" placeholder="{{item.dob}}" ></ion-datetime>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Driving License: (Only if have)</ion-label>\n                  <ion-input type="text" #liNumber [(ngModel)]="item.liNumber" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item><br/>\n\n              <div style="background-color: black;height: 2px;"></div>\n              <h6 style="text-align:center;background-color:#e8ebef;"><b>CONTACT DETAILS</b></h6>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Email:</ion-label>\n                <ion-input type="text" style="color:#000000;" #email [(ngModel)]="item.email" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Contact Number: (eg. +6738123456)</ion-label>\n                <ion-input type="text" style="color:#000000;" #contactNum [(ngModel)]="item.contactNum" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Emergency Number: (eg. +6738123456)</ion-label>\n                <ion-input type="text" style="color:#000000;" #emNum [(ngModel)]="item.emNum" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Address:</ion-label>\n                <ion-textarea style="height: 90px;color:#000000;" #address [(ngModel)]="item.address" [ngModelOptions]="{standalone: true}"></ion-textarea>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>Postal Code:</ion-label>\n                <ion-input type="text" style="color:#000000;" #postcode [(ngModel)]="item.postcode" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item><br/>\n\n              <div style="background-color: black;height: 2px;"></div>\n              <h6 style="text-align:center;background-color:#e8ebef;"><b>QUALIFICATION SKILLS</b></h6>\n              <br/>\n              <ion-item>\n                <ion-label>Master Degree</ion-label>\n                <ion-checkbox #mdgree [(ngModel)]="item.mdgree" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Degree</ion-label>\n                <ion-checkbox #degree [(ngModel)]="item.degree" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Higher Diploma</ion-label>\n                <ion-checkbox #hnd [(ngModel)]="item.hnd" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Diploma</ion-label>\n                <ion-checkbox #diploma [(ngModel)]="item.diploma" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>A\'Level</ion-label>\n                <ion-checkbox #alevel [(ngModel)]="item.alevel" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>O\'Level</ion-label>\n                <ion-checkbox #olevel [(ngModel)]="item.olevel" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Other qualification:</ion-label>\n                <ion-checkbox #othQual [(ngModel)]="item.othQual" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item *ngIf="item.othQual">\n                <ion-label>Specify:</ion-label>\n                <ion-input type="text" style="color:#000000;" #qual1 [(ngModel)]="item.qual1" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item><br/>\n\n              <div style="background-color: black;height: 2px;"></div>\n              <h6 style="text-align:center;background-color:#e8ebef;"><b>LANGUAGE SKILLS</b></h6>\n              <ion-item style="background-color:transparent;">\n                <ion-label>English Language</ion-label>\n                  <ion-select #engLang [(ngModel)]="item.engLang" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Excellent">Excellent</ion-option>\n                  <ion-option value="Moderate">Moderate</ion-option>\n                  <ion-option value="Poor">Poor</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>Malay Language</ion-label>\n                  <ion-select #malLang [(ngModel)]="item.malLang" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Excellent">Excellent</ion-option>\n                  <ion-option value="Moderate">Moderate</ion-option>\n                  <ion-option value="Poor">Poor</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label>Other language:</ion-label>\n                <ion-checkbox #other1 [(ngModel)]="item.other1" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item *ngIf="item.other1">\n                <ion-label>Specify:</ion-label>\n                <ion-input type="text" placeholder="Please specify.." style="color:#000000;" #lang1 [(ngModel)]="item.lang1" [ngModelOptions]="{standalone: true}"></ion-input>\n                <ion-select #lang1s [(ngModel)]="item.lang1s" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Excellent">Excellent</ion-option>\n                  <ion-option value="Moderate">Moderate</ion-option>\n                  <ion-option value="Poor">Poor</ion-option>\n                </ion-select>\n              </ion-item><br/>\n\n              <div style="background-color: black;height: 2px;"></div>\n              <h6 style="text-align:center;background-color:#e8ebef;"><b>JOB EXPERIENCE</b></h6>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Companies Name:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExp [(ngModel)]="item.jobExp" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>Position:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExpPos [(ngModel)]="item.jobExpPos" [ngModelOptions]="{standalone: true}"></ion-input>\n                <ion-select #jobExpYear [(ngModel)]="item.jobExpYear" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Less than 1 year">Less than 1 Year</ion-option>\n                  <ion-option value="Less than 2 years">Less than 2 Years</ion-option>\n                  <ion-option value="More than 2 years">More than 2 years</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngIf="(item.jobExpTotal >= 1)" style="background-color:transparent;">\n                <ion-label floating>Companies Name:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExp1 [(ngModel)]="item.jobExp1" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="(item.jobExpTotal >= 1)">\n                <ion-label>Position:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExp1Pos [(ngModel)]="item.jobExp1Pos" [ngModelOptions]="{standalone: true}"></ion-input>\n                <ion-select #jobExp1Year [(ngModel)]="item.jobExp1Year" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Less than 1 year">Less than 1 Year</ion-option>\n                  <ion-option value="Less than 2 years">Less than 2 Years</ion-option>\n                  <ion-option value="More than 2 years">More than 2 years</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngIf="(item.jobExpTotal >= 2)" style="background-color:transparent;">\n                <ion-label floating>Companies Name:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExp2 [(ngModel)]="item.jobExp2" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="(item.jobExpTotal >= 2)">\n                <ion-label>Position:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExp2Pos [(ngModel)]="item.jobExp2Pos" [ngModelOptions]="{standalone: true}"></ion-input>\n                <ion-select #jobExp2Year [(ngModel)]="item.jobExp2Year" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Less than 1 year">Less than 1 Year</ion-option>\n                  <ion-option value="Less than 2 years">Less than 2 Years</ion-option>\n                  <ion-option value="More than 2 years">More than 2 years</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngIf="(item.jobExpTotal >= 3)" style="background-color:transparent;">\n                <ion-label floating>Companies Name:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExp3 [(ngModel)]="item.jobExp3" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="(item.jobExpTotal >= 3)">\n                <ion-label>Position:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExp3Pos [(ngModel)]="item.jobExp3Pos" [ngModelOptions]="{standalone: true}"></ion-input>\n                <ion-select #jobExp3Year [(ngModel)]="item.jobExp3Year" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Less than 1 year">Less than 1 Year</ion-option>\n                  <ion-option value="Less than 2 years">Less than 2 Years</ion-option>\n                  <ion-option value="More than 2 years">More than 2 years</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngIf="(item.jobExpTotal >= 4)" style="background-color:transparent;">\n                <ion-label floating>Companies Name:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExp4 [(ngModel)]="item.jobExp4" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="(item.jobExpTotal >= 4)">\n                <ion-label>Position:</ion-label>\n                <ion-input type="text" style="color:#000000;" #jobExp4Pos [(ngModel)]="item.jobExp4Pos" [ngModelOptions]="{standalone: true}"></ion-input>\n                <ion-select #jobExp4Year [(ngModel)]="item.jobExp4Year" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="Less than 1 year">Less than 1 Year</ion-option>\n                  <ion-option value="Less than 2 years">Less than 2 Years</ion-option>\n                  <ion-option value="More than 2 years">More than 2 years</ion-option>\n                </ion-select>\n              </ion-item><br/>\n              <button *ngIf="(item.jobExp != undefined) && (item.jobExp != \'\')\n              && (item.jobExpPos != undefined) && (item.jobExpPos != \'\')\n              && (item.jobExpYear != undefined) && (item.jobExpYear != \'\') && (item.jobExpTotal == 0)" ion-button color="balanced" block style="font-weight:600;color:#FFFFFF;background-color:#000000;" (click)="jobAdd(item.jobExpTotal)" >\n                Add More\n              </button>\n              <button *ngIf="(item.jobExp1 != undefined) && (item.jobExp1 != \'\')\n              && (item.jobExp1Pos != undefined) && (item.jobExp1Pos != \'\')\n              && (item.jobExp1Year != undefined) && (item.jobExp1Year != \'\') && (item.jobExpTotal == 1)" ion-button color="balanced" block style="font-weight:600;color:#FFFFFF;background-color:#000000;" (click)="jobAdd(item.jobExpTotal)" >\n                Add More\n              </button>\n              <button *ngIf="(item.jobExp2 != undefined) && (item.jobExp2 != \'\')\n              && (item.jobExp2Pos != undefined) && (item.jobExp2Pos != \'\')\n              && (item.jobExp2Year != undefined) && (item.jobExp2Year != \'\') && (item.jobExpTotal == 2)" ion-button color="balanced" block style="font-weight:600;color:#FFFFFF;background-color:#000000;" (click)="jobAdd(item.jobExpTotal)" >\n                Add More\n              </button>\n              <button *ngIf="(item.jobExp3 != undefined) && (item.jobExp3 != \'\')\n              && (item.jobExp3Pos != undefined) && (item.jobExp3Pos != \'\')\n              && (item.jobExp3Year != undefined) && (item.jobExp3Year != \'\') && (item.jobExpTotal == 3)" ion-button color="balanced" block style="font-weight:600;color:#FFFFFF;background-color:#000000;" (click)="jobAdd(item.jobExpTotal)" >\n                Add More\n              </button>\n              <button *ngIf="(item.jobExp4 != undefined) && (item.jobExp4 != \'\')\n              && (item.jobExp4Pos != undefined) && (item.jobExp4Pos != \'\')\n              && (item.jobExp4Year != undefined) && (item.jobExp4Year != \'\') && (item.jobExpTotal == 4)" ion-button color="balanced" block style="font-weight:600;color:#FFFFFF;background-color:#000000;" (click)="jobAdd(item.jobExpTotal)" >\n                DONE\n              </button>\n              <br/>\n              <div style="background-color: black;height: 2px;"></div>\n            </div>\n          </div>\n\n          <div *ngIf="item.idNumber == userID">\n            <div *ngIf="item.type == \'company\'">\n              <ion-item style="background-color:transparent;">\n                <ion-label>Operation Time:</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>Monday</ion-label>\n                <ion-checkbox #monday [(ngModel)]="item.monday" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Tuesday</ion-label>\n                <ion-checkbox #tuesday [(ngModel)]="item.tuesday" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Wednesday</ion-label>\n                <ion-checkbox #wednesday [(ngModel)]="item.wednesday" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Thursday</ion-label>\n                <ion-checkbox #thursday [(ngModel)]="item.thursday" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Friday</ion-label>\n                <ion-checkbox #friday [(ngModel)]="item.friday" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Saturday</ion-label>\n                <ion-checkbox #saturday [(ngModel)]="item.saturday" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Sunday</ion-label>\n                <ion-checkbox #sunday [(ngModel)]="item.sunday" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>Morning Session:</ion-label>\n                <ion-datetime displayFormat="HH:mm" max="12:00" style="border-bottom: solid lime 0.0165px;" [(ngModel)]="fstStart" [ngModelOptions]="{standalone: true}"></ion-datetime>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>until</ion-label>\n                <ion-datetime displayFormat="HH:mm" max="12:00" style="border-bottom: solid lime 0.0165px;" [(ngModel)]="fstEnd" [ngModelOptions]="{standalone: true}"></ion-datetime>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>Afternoon Session:</ion-label>\n                <ion-datetime displayFormat="HH:mm" min="12:00" style="border-bottom: solid lime 0.0165px;" [(ngModel)]="sndStart" [ngModelOptions]="{standalone: true}"></ion-datetime>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>until</ion-label>\n                <ion-datetime displayFormat="HH:mm" min="12:00" style="border-bottom: solid lime 0.0165px;" [(ngModel)]="sndEnd" [ngModelOptions]="{standalone: true}"></ion-datetime>\n              </ion-item><br/>\n              <p>*Set the following if got different operating time on the following days.</p>\n              <ion-item>\n                \n                <ion-label>Exception:</ion-label>\n                <ion-select #except [(ngModel)]="item.except" [ngModelOptions]="{standalone: true}">\n                  <ion-option *ngIf="item.monday" value="Monday">Monday</ion-option>\n                  <ion-option *ngIf="item.tuesday" value="Tuesday">Tuesday</ion-option>\n                  <ion-option *ngIf="item.wednesday" value="Wednesday">Wednesday</ion-option>\n                  <ion-option *ngIf="item.thursday" value="Thursday">Thursday</ion-option>\n                  <ion-option *ngIf="item.friday" value="Friday">Friday</ion-option>\n                  <ion-option *ngIf="item.saturday" value="Saturday">Saturday</ion-option>\n                  <ion-option *ngIf="item.sunday" value="Sunday">Sunday</ion-option>\n                  <ion-option value="">None</ion-option>\n                </ion-select>\n\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>Morning Session:</ion-label>\n                <ion-datetime displayFormat="HH:mm" max="12:00" style="border-bottom: solid lime 0.0165px;" [(ngModel)]="fstStartE" [ngModelOptions]="{standalone: true}"></ion-datetime>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>until</ion-label>\n                <ion-datetime displayFormat="HH:mm" max="12:00" style="border-bottom: solid lime 0.0165px;" [(ngModel)]="fstEndE" [ngModelOptions]="{standalone: true}"></ion-datetime>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>Afternoon Session:</ion-label>\n                <ion-datetime displayFormat="HH:mm" min="12:00" style="border-bottom: solid lime 0.0165px;" [(ngModel)]="sndStartE" [ngModelOptions]="{standalone: true}"></ion-datetime>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>until</ion-label>\n                <ion-datetime displayFormat="HH:mm" min="12:00" style="border-bottom: solid lime 0.0165px;" [(ngModel)]="sndEndE" [ngModelOptions]="{standalone: true}"></ion-datetime>\n              </ion-item>\n              <ion-item>\n              </ion-item><br/>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Description: (Rules and Regulations)</ion-label>\n                <ion-textarea style="height: 90px;color:#000000;" #desc [(ngModel)]="item.desc" [ngModelOptions]="{standalone: true}"></ion-textarea>\n              </ion-item>\n              <br/>\n\n              <div style="background-color: black;height: 2px;"></div>\n              <h6 style="text-align:center;background-color:#e8ebef;"><b>CONTACT DETAILS</b></h6>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Email:</ion-label>\n                <ion-input type="text" style="color:#000000;" #compEmail [(ngModel)]="item.email" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Contact Number: (eg. +6738123456)</ion-label>\n                <ion-input type="text" style="color:#000000;" #compcontactNum [(ngModel)]="item.contactNum" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label floating>Address:</ion-label>\n                <ion-textarea style="height: 90px;color:#000000;" #compAddress [(ngModel)]="item.address" [ngModelOptions]="{standalone: true}"></ion-textarea>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label>Postal Code:</ion-label>\n                <ion-input type="text" style="color:#000000;" #postcode [(ngModel)]="item.postcode" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:transparent;">\n                <ion-label><h6 style="color: grey;" float-left>Location:</h6><button (click)="editLocation()" style="color: white; background-color: black;" float-right>Change Location</button></ion-label>\n              </ion-item>\n              <div style="background-color: black;height: 2px;"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div></form>\n  </content>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _j || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocationPage = (function () {
    function LocationPage(navCtrl, app, fire, database, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.fire = fire;
        this.database = database;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var id = this.fire.auth.currentUser.displayName;
        var dats = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["database"]().ref('/users/' + id);
        dats.child('lat').once('value', function (lat) {
            dats.child('long').once('value', function (long) {
                _this.lat = lat.val();
                _this.lng = long.val();
                //The center location of our map.
                var centerOfMap = new google.maps.LatLng(_this.lat, _this.lng);
                //Map options.
                var options = {
                    center: centerOfMap,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                //Create the map object.
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, options);
                //Listen for any clicks on the map.
                google.maps.event.addListener(_this.map, 'click', function (event) {
                    //Get the location that the user clicked.
                    var clickedLocation = event.latLng;
                    //If the marker hasn't been added.
                    if (this.marker === false) {
                        //Create the marker.
                        this.marker = new google.maps.Marker({
                            position: clickedLocation,
                            map: this.map,
                            draggable: true //make it draggable
                        });
                        //Listen for drag events!
                        google.maps.event.addListener(this.marker, 'dragend', function (event) {
                            this.markerLocation(this.marker);
                        });
                    }
                    else {
                        console.log('a: ' + clickedLocation);
                        console.log(event.latLng.lat());
                        this.lat = clickedLocation.lat();
                        this.lng = clickedLocation.lng();
                        console.log('a: ' + this.lat + ', ' + this.lng);
                        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["database"]().ref('/users/' + id).update({
                            lat: this.lat,
                            long: this.lng
                        }).then(function (res) {
                            alert('You have set the new Location, map location will be updated once you have re-login.');
                            // THE LOCATION IS SAVED, DO YOUR STUFF
                        });
                    }
                });
            });
        });
    };
    LocationPage.prototype.logout = function () {
        this.fire.auth.signOut();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    return LocationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], LocationPage.prototype, "mapElement", void 0);
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\location\location.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div #map id="map"></div>\n	<button (click)="logout()" ion-button color="dark">Logout Now</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\location\location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(alertCtrl, fire, database, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.database = database;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userDetail = {};
        this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.beta = 'abcdefghijklmnopqrstuvwxyz';
        this.numb = '0123456789';
        this.sign = '`~!@#$%^&*()_+-=}{][|:?,.<>';
        this.forb = '';
        this.jobAdd = 0;
        this.sel = this.navParams.get('sel');
    }
    RegisterPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Information!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    RegisterPage.prototype.registerUser = function (userDetail) {
        var _this = this;
        var fullname, passwords;
        var capLet, smalLet, numbers, other;
        for (var p = 0; p < this.password.value.length; p++) {
            for (var a = 0; a < this.alpha.length; a++) {
                if (this.password.value.charAt(p) == this.alpha.charAt(a)) {
                    capLet = true;
                }
            }
            for (var b = 0; b < this.beta.length; b++) {
                if (this.password.value.charAt(p) == this.beta.charAt(b)) {
                    smalLet = true;
                }
            }
            for (var n = 0; n < this.numb.length; n++) {
                if (this.password.value.charAt(p) == this.numb.charAt(n)) {
                    numbers = true;
                }
            }
            for (var s = 0; s < this.sign.length; s++) {
                if (this.password.value.charAt(p) == this.sign.charAt(s)) {
                    other = true;
                }
            }
        }
        if (capLet && smalLet && numbers && other) {
            passwords = 'valid';
        }
        var at = 0;
        var dot, space;
        if (this.userDetail.email != undefined && this.userDetail.email != '') {
            for (var e = 0; e < this.userDetail.email.length; e++) {
                if (this.userDetail.email.charAt(e) == '@') {
                    at = at + 1;
                }
                else if (this.userDetail.email.charAt(e) == '.') {
                    dot = true;
                }
                else if (this.userDetail.email.charAt(e) == ' ') {
                    space = true;
                }
            }
        }
        if (this.sel == 'user') {
            var loginID = 0;
            for (var i = 0; i < this.userDetail.fullName.length; i++) {
                if ((this.userDetail.fullName.charAt(i) + this.userDetail.fullName.charAt(i + 1) + this.userDetail.fullName.charAt(i + 2) + this.userDetail.fullName.charAt(i + 3) + this.userDetail.fullName.charAt(i + 4) == 'BINTI')
                    || (this.userDetail.fullName.charAt(i) + this.userDetail.fullName.charAt(i + 1) + this.userDetail.fullName.charAt(i + 2) + this.userDetail.fullName.charAt(i + 3) + this.userDetail.fullName.charAt(i + 4) == ' BIN ')) {
                    fullname = 'valid';
                    console.log(this.userDetail.fullName.charAt(i) + this.userDetail.fullName.charAt(i + 1) + this.userDetail.fullName.charAt(i + 2) + this.userDetail.fullName.charAt(i + 3) + this.userDetail.fullName.charAt(i + 4));
                }
            }
            var logCheck = this.idNumber.value.split('-').join("");
            for (var d = 0; d < logCheck.length; d++) {
                console.log(d + ' ID:' + logCheck.charAt(d) + ' Current Detection:' + loginID);
                loginID = loginID + 1;
            }
            if (parseInt(this.userDetail.idNumber.split('P').join("")) && loginID == 8
                || parseInt(this.userDetail.idNumber.split('-').join("")) && loginID == 8) {
                if (fullname == 'valid') {
                    if ((at == 1) && (dot) && (!space)) {
                        if (passwords == 'valid') {
                            if (this.userDetail.question != undefined || this.userDetail.answer != undefined || this.userDetail.answer != "") {
                                this.fire.auth.createUserWithEmailAndPassword(this.idNumber.value + "@YC.COM", this.password.value).then(function (data) {
                                    var user = _this.fire.auth.currentUser;
                                    user.updateProfile({
                                        displayName: _this.idNumber.value,
                                        photoURL: ""
                                    }).then(function () {
                                        firebase.auth().signOut();
                                    }).catch(function (error) { });
                                    _this.userRef$ = _this.database.list('users');
                                    if (_this.userDetail.color == undefined || '') {
                                        _this.userRef$.update(_this.userDetail.idNumber, {
                                            color: ""
                                        });
                                    }
                                    else {
                                        _this.userRef$.update(_this.userDetail.idNumber, {
                                            color: _this.userDetail.color
                                        });
                                    }
                                    _this.userRef$.update(_this.userDetail.idNumber, {
                                        type: _this.sel,
                                        photo: 'assets/default.png',
                                        fullName: _this.userDetail.fullName,
                                        idNumber: _this.userDetail.idNumber,
                                        email: _this.userDetail.email,
                                        jobExpTotal: 0,
                                        question: _this.userDetail.question,
                                        answer: _this.userDetail.answer,
                                        password: _this.password.value
                                    });
                                    _this.userDetail = {};
                                    _this.navCtrl.pop();
                                    _this.alert('Successfuly registered!');
                                }).catch(function (error) {
                                    if (error.message == 'The email address is badly formatted.') {
                                        _this.alert('IC/Passport Number is required!');
                                    }
                                    else if ('The email address is already in use by another account.') {
                                        _this.alert('IC/Passport Number is already used.');
                                    }
                                    else {
                                        _this.alert(error.message);
                                    }
                                });
                            }
                            else {
                                this.alert('Please complete all Details!');
                            }
                        }
                        else {
                            this.alert('Password must atleast contain Symbols, Number, Small and Capital letters.');
                        }
                    }
                    else {
                        this.alert('Email address is badly formatted.');
                    }
                }
                else {
                    this.alert('Full name is badly formatted.');
                }
            }
            else {
                this.alert('IC or Passport Number is badly formatted.');
            }
        }
        else if (this.sel == 'company') {
            if ((at == 1) && (dot) && (!space)) {
                if (passwords == 'valid') {
                    if (this.userDetail.compName == "" || this.userDetail.answer == "") {
                        this.alert('Please complete all Details!');
                    }
                    else {
                        this.fire.auth.createUserWithEmailAndPassword(this.idNumber.value.split(' ').join("") + "@YC.COM", this.password.value)
                            .then(function (data) {
                            var user = _this.fire.auth.currentUser;
                            user.updateProfile({
                                displayName: _this.idNumber.value.split(' ').join(""),
                                photoURL: ""
                            }).then(function () {
                                firebase.auth().signOut();
                            }).catch(function (error) { });
                            _this.userRef$ = _this.database.list('users');
                            _this.userRef$.update(_this.userDetail.compName.split(' ').join(""), {
                                type: _this.sel,
                                photo: 'assets/default.png',
                                compName: _this.userDetail.compName,
                                idNumber: _this.userDetail.compName.split(' ').join(""),
                                firstStart: "",
                                firstEnd: "",
                                secStart: "",
                                secEnd: "",
                                firstStartE: "",
                                firstEndE: "",
                                secStartE: "",
                                secEndE: "",
                                email: _this.userDetail.email,
                                lat: 4.504632318432753,
                                long: 114.871229143155,
                                question: _this.userDetail.question,
                                answer: _this.userDetail.answer,
                                password: _this.password.value
                            });
                            _this.userDetail = {};
                            _this.navCtrl.pop();
                            _this.alert('Registered!');
                        }).catch(function (error) {
                            if (error.message == 'The email address is badly formatted.') {
                                _this.alert('Company Name is required!');
                            }
                            else if ('The email address is already in use by another account.') {
                                _this.alert('IC/Passport Number is already used.');
                            }
                            else {
                                _this.alert(error.message);
                            }
                        });
                    }
                }
                else {
                    this.alert('Password must atleast contain Symbols, Number, Small and Capital letters.');
                }
            }
            else {
                this.alert('Email address is badly formatted.');
            }
        }
    };
    RegisterPage.prototype.addJob = function () {
        if (this.jobAdd == 5) {
            this.jobAdd = 0;
        }
        else {
            this.jobAdd = this.jobAdd + 1;
        }
    };
    return RegisterPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('idNumber'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "idNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "password", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\register\register.html"*/'<ion-header><ion-navbar><ion-title>\n  REGISTRATION\n</ion-title></ion-navbar></ion-header>\n\n<ion-content padding *ngIf="sel == \'user\'">\n  <p style="text-align: justify;">Please complete all the following details.</p>\n  <form>\n<!-- Personal Details -->\n  <h2 style="text-align:center;">Login Details</h2>\n  <div class="spacer" style="width:100%;height:3px;background-color: black;"></div>\n  <p style="text-align: justify;font-style: italic;">If you do not have IC Number, \n  please use your Passport Number (Use \'P\' for the letter eg. P0101010).</p>\n    <!-- Fulll Name -->\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Full Name:</ion-label>\n          <ion-input type="text" [(ngModel)]="userDetail.fullName" (ngModelChange)="userDetail.fullName = $event.toLocaleUpperCase()" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n    <!-- Email Address -->\n      <ion-item style="background-color:transparent;">\n        <ion-label floating>Email:</ion-label>\n        <ion-input #email [(ngModel)]="userDetail.email" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n    <!-- IC/Passport -->\n      <ion-item>\n        <ion-label floating>IC/Passport Number:</ion-label>\n          <ion-input type="text" #idNumber [(ngModel)]="userDetail.idNumber" (ngModelChange)="userDetail.idNumber = $event.toLocaleUpperCase()" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!(idNumber.value.charAt(0) == \'P\') && !(idNumber.value.charAt(0) == \'\')">\n        <ion-label>Color</ion-label>\n          <ion-select [(ngModel)]="userDetail.color" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Green">G - Green</ion-option>\n          <ion-option value="Red">R - Red</ion-option>\n          <ion-option value="Yellow">Y - Yellow</ion-option>\n          <ion-option value="Purple">P - Purple</ion-option>\n        </ion-select>\n      </ion-item>\n      <!-- Password -->    \n      <ion-item style="background-color:transparent;">\n        <ion-label floating>Password:</ion-label>\n        <ion-input type="password" style="color:#000000;" #password></ion-input>\n      </ion-item>\n    </ion-list>\n\n<!-- Security Details -->\n  <div class="spacer" style="width:100%;height:10px;"></div>\n  <h2 style="text-align:center;">Security Details</h2>\n  <div class="spacer" style="width:100%;height:3px;background-color: black;"></div>\n  <p style="text-align: justify;font-style: italic;">Important: This question and answer will be used for password reset purposes.</p>\n  <!-- Question -->\n    <ion-list>\n      <ion-item style="background-color:transparent;">\n        <ion-label floating>Question:</ion-label>\n          <ion-select [(ngModel)]="userDetail.question" [ngModelOptions]="{standalone: true}">\n          <ion-option value="What is my pet name?.">What is my pet name?.</ion-option>\n          <ion-option value="Who is my bestfriend?">Who is my bestfriend?.</ion-option>\n          <ion-option value="What is my backup password?">What is my backup password?</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item style="background-color:transparent;">\n        <ion-label floating>Answer:</ion-label>\n          <ion-input type="password" [(ngModel)]="userDetail.answer" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <div class="spacer" style="width:300px;height:11px;"></div>\n    <div *ngIf="(userDetail.idNumber != undefined)\n        && (userDetail.question != undefined)\n        && (userDetail.answer != undefined)\n        && (password.value != undefined)">\n    <h3>Terms and Conditions!</h3>\n    <p style="text-align: justify;font-style: italic;">By registering to this application you must agree, and declared that all the following informations are true and valid. Also, we have the right to share this informations given by you for Job seeking purposes only.</p>\n    <ion-checkbox [(ngModel)]="check" [ngModelOptions]="{standalone: true}"></ion-checkbox><ion-label>Please check if you have read and agree.</ion-label>\n    </div>\n<!-- Register -->\n    <button *ngIf="check" ion-button color="balanced" block style="font-weight:600;color:#FFFFFF;background-color:#000000;" (click)="registerUser(userDetail)" >\n      REGISTER\n    </button>\n\n  </form>\n</ion-content>\n\n<ion-content padding *ngIf="sel == \'company\'">\n  <p style="text-align: justify;">Please fill in all the following details.</p>\n  <form>\n<!-- Company Details -->\n  <h2 style="text-align:center;">Company Details</h2>\n  <div class="spacer" style="width:100%;height:3px;background-color: black;"></div>\n    <!-- Company Name -->\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Company Name:</ion-label>\n          <ion-input #idNumber [(ngModel)]="userDetail.compName" (ngModelChange)="userDetail.compName = $event.toLocaleUpperCase()" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <!-- Email Address -->\n    <ion-item style="background-color:transparent;">\n      <ion-label floating>Email:</ion-label>\n      <ion-input #email [(ngModel)]="userDetail.email" [ngModelOptions]="{standalone: true}"></ion-input>\n    </ion-item>\n\n    <!-- Password -->    \n      <ion-list>\n        <ion-item>\n          <ion-label floating>Password:</ion-label>\n          <ion-input type="password" #password></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-list>\n\n<!-- Security Details -->\n  <div class="spacer" style="width:100%;height:10px;"></div>\n  <h2 style="text-align:center;">Security Details:</h2>\n  <div class="spacer" style="width:100%;height:3px;background-color: black;"></div>\n  <p style="text-align: justify;font-style: italic;">Important: This question and answer will be used for password reset purposes.</p>\n  <!-- Question -->\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Question:</ion-label>\n          <ion-select [(ngModel)]="userDetail.question" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Company backup password?">Company backup password?</ion-option>\n          <ion-option value="Company secret code?">Company secret code?.</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Answer:</ion-label>\n          <ion-input type="password" [(ngModel)]="userDetail.answer" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n    </ion-list>\n    \n    <div class="spacer" style="width:300px;height:11px;"></div>\n    <div *ngIf="(userDetail.compName != undefined)\n        && (userDetail.question != undefined)\n        && (userDetail.answer != undefined)\n        && (password.value != undefined)">\n    <h3>Terms and Conditions!</h3>\n    <p style="text-align: justify;font-style: italic;">By registering to this application company must agree, and declared that all the following informations are used for JobSeeker purposes only. Termination of the company will be fined if found violating.</p>\n    <ion-checkbox [(ngModel)]="check" [ngModelOptions]="{standalone: true}"></ion-checkbox><ion-label>Please check if you have read and agree.</ion-label>\n    </div>\n<!-- Register -->\n    <button *ngIf="check" ion-button color="balanced" block style="font-weight:600;color:#FFFFFF;background-color:#000000;" (click)="registerUser(userDetail)" >\n      REGISTER\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 235;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/location/location.module": [
		1001,
		2
	],
	"../pages/login/login.module": [
		1003,
		1
	],
	"../pages/register/register.module": [
		1002,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 283;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(app, fire, platform, statusBar, splashScreen) {
        var _this = this;
        this.app = app;
        this.fire = fire;
        this.username = '';
        this.userParams = {
            curuser: ''
        };
        platform.ready().then(function () {
        });
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user == null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
                unsubscribe();
            }
            else {
                var name = user.displayName;
                _this.userParams.curuser = name;
                console.log('Got user ' + name + ' and ' + _this.userParams.curuser);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                unsubscribe();
            }
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-app',template:/*ion-inline-start:"C:\Users\MOC_Admin\Desktop\YourCareer\src\app\app.html"*/'<ion-nav [root]="rootPage" [rootParams]="userParams"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\MOC_Admin\Desktop\YourCareer\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacancyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VacancyPage = (function () {
    function VacancyPage(fire, navCtrl, navParams, database, alertCtrl, actionSheetCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.userDetail = {};
        this.date = new Date().toISOString();
        this.otluser = '';
        var user = fire.auth.currentUser;
        var name = user.displayName;
        this.otluser = name;
        this.statis = this.database.list('xstats');
        this.vacanciesRef = this.database.list('vacancies');
        this.appListRef = this.database.list('users/' + this.otluser + '/applying');
        this.usersRef = this.database.list('users');
        this.jobListRef = this.database.list('users/' + this.otluser + '/applicant');
        this.hiringRef = this.database.list('users/' + this.otluser + '/hiring');
        this.interviewRef = this.database.list('users/' + this.otluser + '/interview');
        var dats = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + this.otluser);
        dats.child('type').once('value', function (snapshot) {
            var items = snapshot.val();
            if (items == 'company') {
                _this.num = 1;
                _this.mun = 'company';
            }
            else {
                _this.num = 0;
                _this.mun = 'user';
            }
        });
    }
    VacancyPage.prototype.ionViewDidLoad = function () {
    };
    VacancyPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var appliedJob = 0;
        this.searchRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/users/' + this.otluser + '/applying/');
        this.searchRef.on('value', function (applied) {
            applied.forEach(function (search) {
                appliedJob = appliedJob + 1;
                return false;
            });
        });
        this.searchRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/vacancies');
        this.searchRef.on('value', function (searchList) {
            var searches = [];
            var size = 0;
            searchList.forEach(function (search) {
                var length = 0;
                var dats = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/vacancies/' + search.key);
                dats.child('noApp').once('value', function (noApp) {
                    var hiring = noApp.val();
                    if (hiring == 0) {
                        _this.database.list('/vacancies/' + search.key).remove();
                    }
                    else {
                        console.log('a ' + search.key);
                        var dats = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/vacancies/' + search.key);
                        dats.child('expDate').once('value', function (expDate) {
                            if (parseInt(expDate.val().split('-').join("")) < parseInt(_this.date.substring(0, 10).split('-').join(""))) {
                                console.log('Deleted: ' + search.key);
                                _this.database.list('/vacancies/' + search.key).remove();
                            }
                            else {
                            }
                        });
                    }
                });
                __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + _this.otluser + '/applying/').once('value', function (snapshot) {
                    if (snapshot.val() == null) {
                        searches.push(search.val());
                    }
                    else {
                        snapshot.forEach(function (job) {
                            length = length + 1;
                            var dats = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + _this.otluser + '/applying');
                            dats.child('noApp').once('value', function (noApp) {
                                var items = noApp.val();
                                if (job.key == search.key) {
                                    length = appliedJob + 1;
                                    return false;
                                }
                                else if (job.key != search.key && search.key != 'ExpDate') {
                                    if (length == appliedJob) {
                                        searches.push(search.val());
                                    }
                                }
                            });
                            return false;
                        });
                    }
                    _this.searchList = searches;
                    _this.loadedsearchList = searches;
                });
                return false;
            });
        });
    };
    VacancyPage.prototype.initializeItems = function () {
        this.searchList = this.loadedsearchList;
    };
    VacancyPage.prototype.getItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.searchList = this.searchList.filter(function (v) {
            if (v.compName && v.jobName && q) {
                if (v.compName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                else if (v.jobName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    VacancyPage.prototype.addVacancy = function () {
        this.num = 4;
    };
    VacancyPage.prototype.saveVacancy = function () {
        var _this = this;
        var existed;
        var curDate = new Date().toISOString().substring(0, 10).split('-').join("");
        var dats = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + this.otluser);
        dats.child('compName').once('value', function (snapshot) {
            var items = snapshot.val();
            for (var i = 9999; i > 0; i--) {
                var dat = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('vacancies/' + i + _this.otluser + _this.jobName.value);
                dat.child('idNumber').once('value', function (snapID) {
                    var item = snapID.val();
                    if (item == i + _this.otluser + _this.jobName.value) {
                        existed = true;
                    }
                });
            }
            if (existed) {
                _this.alert('You have already offer this job.');
            }
            else {
                console.log('Got it, this job have not added yet.');
                var pickDate;
                if (_this.userDetail.expDate != undefined) {
                    pickDate = _this.userDetail.expDate.split('-').join("");
                }
                if (parseInt(pickDate) < parseInt(curDate)) {
                    _this.alert('Expiration date cannot be previous date.');
                }
                else {
                    var alert = _this.alertCtrl.create({
                        title: 'Confirmation',
                        message: "Do you want to offer this job?",
                        buttons: [
                            {
                                text: "Yes",
                                handler: function () {
                                    var data = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/xstats/');
                                    data.child('createdJob').once('value', function (statistic) {
                                        var getNewID = statistic.val();
                                        console.log('id: ' + statistic.val());
                                        _this.vacanciesRef.update(statistic.val() + _this.otluser + _this.jobName.value, {
                                            idNumber: statistic.val() + _this.otluser + _this.jobName.value,
                                            compName: items,
                                            jobName: _this.jobName.value,
                                            desc: _this.desc.value,
                                            reqSkill: _this.reqskill.value,
                                            workHour: _this.workHour.value,
                                            dob: _this.dob.value,
                                            gender: _this.gender.value,
                                            nationality: _this.nationality.value,
                                            marital: _this.marital.value,
                                            expDate: _this.userDetail.expDate,
                                            id: statistic.val(),
                                            noApp: _this.noApp.value
                                        });
                                        _this.statis.update('/', { createdJob: statistic.val() - 1 });
                                        __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/').once('value', function (snapshot) {
                                            snapshot.forEach(function (snap) {
                                                var data = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + snap.key);
                                                data.child('type').once('value', function (snapshot) {
                                                    if (snapshot.val() == 'user') {
                                                        _this.database.list('users').update(snap.key, {
                                                            newjob: 'New vacancy is available!'
                                                        });
                                                    }
                                                });
                                                return false;
                                            });
                                        });
                                        _this.userDetail = {};
                                        _this.vacanciesRef = _this.database.list('vacancies/');
                                        _this.checkBack();
                                    });
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
            // });
        });
    }; // Important 1st
    VacancyPage.prototype.saveChangeVacancy = function (userDetail) {
        var _this = this;
        var dats = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + this.otluser);
        dats.child('compName').once('value', function (snapshot) {
            var items = snapshot.val();
            var alert = _this.alertCtrl.create({
                title: 'Confirmation',
                message: "Do you want to save these changes?",
                buttons: [
                    {
                        text: "Yes",
                        handler: function () {
                            console.log('ID ' + userDetail.idNumber);
                            _this.vacanciesRef.update(userDetail.idNumber, {
                                desc: _this.desc.value,
                                reqSkill: _this.reqskill.value,
                                dob: _this.dob.value,
                                gender: _this.gender.value,
                                nationality: _this.nationality.value,
                                marital: _this.marital.value,
                                noApp: _this.noApp.value
                            });
                            _this.userDetail = {};
                            _this.vacanciesRef = _this.database.list('vacancies/');
                            _this.checkBack();
                        }
                    },
                    {
                        text: "No",
                        role: 'cancel',
                    }
                ]
            });
            alert.present();
        });
    }; // Important 2nd
    VacancyPage.prototype.editVacancy = function (userDetail) {
        this.job = userDetail.idNumber;
        console.log('Job: ' + this.job);
        this.num = 5;
    }; // Important 3rd
    VacancyPage.prototype.presentUserActionSheet = function (userDetail) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: userDetail.jobName,
            subTitle: '> Select an Option',
            buttons: [
                {
                    text: 'About Company',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], {
                            compId: userDetail.compName.split(' ').join("")
                        });
                    }
                },
                {
                    text: 'Job Details',
                    handler: function () {
                        var alertja = _this.alertCtrl.create({
                            title: userDetail.compName,
                            subTitle: 'Position Offer: ' + userDetail.jobName + '<br/>'
                                + 'Description: ' + userDetail.desc + '<br/>'
                                + 'Requirements: ' + userDetail.reqSkill + '<br/>'
                                + 'Working Hours: ' + userDetail.workHour + '<br/>'
                                + 'Age Range: ' + (2008 - parseInt(userDetail.dob)) + ' to ' + (2017 - parseInt(userDetail.dob)) + '<br/>'
                                + 'Gender: ' + userDetail.gender + '<br/>'
                                + 'Nationality: ' + userDetail.nationality + '<br/>'
                                + 'Marital Status: ' + userDetail.marital + '<br/>'
                                + 'expDate: ' + userDetail.expDate + '<br/>'
                                + 'Hiring: ' + userDetail.noApp + '<br/>',
                            buttons: [
                                {
                                    text: 'Apply',
                                    handler: function () {
                                        var alertaj = _this.alertCtrl.create({
                                            title: 'Confirmation',
                                            message: "Do you want to apply?",
                                            buttons: [
                                                {
                                                    text: "Yes",
                                                    handler: function () {
                                                        _this.database.list('users/' + userDetail.compName.split(' ').join("") + '/applicant').update(_this.otluser + userDetail.jobName, {
                                                            idNumber: _this.otluser,
                                                            compName: userDetail.compName,
                                                            jobName: userDetail.jobName,
                                                            desc: userDetail.desc,
                                                            reqSkill: userDetail.reqSkill,
                                                            dob: userDetail.dob,
                                                            gender: userDetail.gender,
                                                            nationality: userDetail.nationality,
                                                            marital: userDetail.marital,
                                                            id: userDetail.id,
                                                            expDate: userDetail.expDate,
                                                            noApp: userDetail.noApp
                                                        });
                                                        _this.database.list('users').update(_this.otluser + '/applying/' + userDetail.idNumber, {
                                                            idNumber: userDetail.idNumber,
                                                            compName: userDetail.compName,
                                                            jobName: userDetail.jobName,
                                                            desc: userDetail.desc,
                                                            reqSkill: userDetail.reqSkill,
                                                            dob: userDetail.dob,
                                                            gender: userDetail.gender,
                                                            nationality: userDetail.nationality,
                                                            marital: userDetail.marital,
                                                            noApp: userDetail.noApp,
                                                            id: userDetail.id,
                                                            expDate: userDetail.expDate,
                                                            label: ""
                                                        });
                                                        _this.database.list('users').update(userDetail.compName.split(' ').join(""), {
                                                            newapp: 'Got new applicants!'
                                                        });
                                                        _this.ionViewDidEnter();
                                                    }
                                                },
                                                {
                                                    text: "No",
                                                    role: 'cancel',
                                                }
                                            ]
                                        });
                                        alertaj.present();
                                    }
                                },
                                {
                                    text: 'Close',
                                    role: 'cancel'
                                }
                            ]
                        });
                        alertja.present();
                        _this.ionViewDidEnter();
                    }
                },
                {
                    text: 'Apply Job',
                    handler: function () {
                        var alert = _this.alertCtrl.create({
                            title: 'Confirmation',
                            message: "Do you want to apply?",
                            buttons: [
                                {
                                    text: "Yes",
                                    handler: function () {
                                        _this.database.list('users/' + userDetail.compName.split(' ').join("") + '/applicant').update(_this.otluser + userDetail.jobName, {
                                            idNumber: _this.otluser,
                                            compName: userDetail.compName,
                                            jobName: userDetail.jobName,
                                            desc: userDetail.desc,
                                            reqSkill: userDetail.reqSkill,
                                            dob: userDetail.dob,
                                            gender: userDetail.gender,
                                            nationality: userDetail.nationality,
                                            marital: userDetail.marital,
                                            id: userDetail.id,
                                            expDate: userDetail.expDate,
                                            noApp: userDetail.noApp
                                        });
                                        _this.database.list('users').update(_this.otluser + '/applying/' + userDetail.idNumber, {
                                            idNumber: userDetail.idNumber,
                                            compName: userDetail.compName,
                                            jobName: userDetail.jobName,
                                            desc: userDetail.desc,
                                            reqSkill: userDetail.reqSkill,
                                            dob: userDetail.dob,
                                            gender: userDetail.gender,
                                            nationality: userDetail.nationality,
                                            marital: userDetail.marital,
                                            id: userDetail.id,
                                            noApp: userDetail.noApp,
                                            expDate: userDetail.expDate,
                                            label: ""
                                        });
                                        _this.database.list('users').update(userDetail.compName.split(' ').join(""), {
                                            newapp: 'Got new applicants!'
                                        });
                                        _this.ionViewDidEnter();
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
                },
                {
                    text: 'Save for Later',
                    handler: function () {
                        var alert = _this.alertCtrl.create({
                            title: 'Confirmation',
                            message: "Do you want to save this job?",
                            buttons: [
                                {
                                    text: "Yes",
                                    handler: function () {
                                        _this.database.list('users').update(_this.otluser + '/applying/' + userDetail.idNumber, {
                                            label: 'saved',
                                            idNumber: userDetail.idNumber,
                                            compName: userDetail.compName,
                                            jobName: userDetail.jobName,
                                            desc: userDetail.desc,
                                            reqSkill: userDetail.reqSkill,
                                            dob: userDetail.dob,
                                            gender: userDetail.gender,
                                            nationality: userDetail.nationality,
                                            marital: userDetail.marital,
                                            id: userDetail.id,
                                            expDate: userDetail.expDate,
                                            noApp: userDetail.noApp
                                        });
                                        _this.ionViewDidEnter();
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
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    VacancyPage.prototype.presentCompActionSheet = function (userDetail) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: userDetail.jobName,
            subTitle: '> Select an Option:',
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        _this.editVacancy(userDetail);
                    }
                },
                {
                    text: 'Close Offer',
                    handler: function () {
                        var dats = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + _this.otluser);
                        dats.child('compName').once('value', function (snapshot) {
                            var alert = _this.alertCtrl.create({
                                title: 'Caution!',
                                message: 'All ' + userDetail.jobName + ' applicants and vacancy offers will be lost, do you want to continue?',
                                buttons: [
                                    {
                                        text: 'Yes',
                                        handler: function () {
                                            __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/').once('value', function (doThis) {
                                                doThis.forEach(function (users) {
                                                    __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + users.key + '/applying/').once('value', function (update) {
                                                        update.forEach(function (jobs) {
                                                            if (jobs.key == userDetail.id + _this.otluser + userDetail.jobName) {
                                                                _this.database.list('users').update(users.key + '/applying/' + userDetail.id + _this.otluser + userDetail.jobName, {
                                                                    noApp: 0,
                                                                    reqSkill: 'No Longer Available'
                                                                });
                                                            }
                                                            return false;
                                                        });
                                                    });
                                                    return false;
                                                });
                                            });
                                            __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + _this.otluser + '/applicant/').once('value', function (snapshot) {
                                                snapshot.forEach(function (user) {
                                                    console.log('r ' + user.key);
                                                    __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + user.key.split(userDetail.jobName).join("") + '/applying/').once('value', function (snapshot) {
                                                        snapshot.forEach(function (job) {
                                                            console.log('r ' + job.key);
                                                            if (job.key == userDetail.id + _this.otluser + userDetail.jobName) {
                                                                _this.database.list('users').update(user.key.split(userDetail.jobName).join("") + '/applying/' + userDetail.id + _this.otluser + userDetail.jobName, {
                                                                    noApp: 0,
                                                                    reqSkill: 'No Longer Available'
                                                                });
                                                                _this.jobListRef.remove(user.key);
                                                            }
                                                            return false;
                                                        });
                                                    });
                                                    return false;
                                                });
                                            });
                                            _this.vacanciesRef.remove(userDetail.id + _this.otluser + userDetail.jobName);
                                        }
                                    },
                                    {
                                        text: 'No',
                                        role: 'cancel'
                                    }
                                ]
                            });
                            alert.present();
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    VacancyPage.prototype.presentSelActionSheet = function (userDetail) {
        var _this = this;
        if (this.mun == 'user') {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Select an Option:',
                buttons: [
                    {
                        text: 'About Company',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { compId: userDetail.compName.split(' ').join("") });
                        }
                    },
                    {
                        text: 'Job Details',
                        handler: function () {
                            var alert = _this.alertCtrl.create({
                                title: userDetail.compName,
                                subTitle: 'Position Offer: ' + userDetail.jobName + '<br/>'
                                    + 'Description: ' + userDetail.desc + '<br/>'
                                    + 'Requirements: ' + userDetail.reqSkill + '<br/>'
                                    + 'Working Hours: ' + userDetail.workHour + '<br/>'
                                    + 'Age Range: ' + (2008 - parseInt(userDetail.dob)) + ' to ' + (2017 - parseInt(userDetail.dob)) + '<br/>'
                                    + 'Gender: ' + userDetail.gender + '<br/>'
                                    + 'Nationality: ' + userDetail.nationality + '<br/>'
                                    + 'Marital Status: ' + userDetail.marital + '<br/>'
                                    + 'expDate: ' + userDetail.expDate + '<br/>'
                                    + 'Hiring: ' + userDetail.noApp + '<br/>',
                                buttons: [
                                    {
                                        text: 'OK',
                                        role: 'cancel'
                                    }
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'Revoke',
                        handler: function () {
                            var alert = _this.alertCtrl.create({
                                message: 'Cancel this application?',
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function () {
                                            _this.database.list('users/' + userDetail.compName.split(' ').join("") + '/applicant').remove(_this.otluser + userDetail.jobName);
                                            _this.appListRef.remove(userDetail.idNumber);
                                            _this.ionViewDidEnter();
                                        }
                                    },
                                    {
                                        text: 'Cancel',
                                    }
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Select an Option:',
                buttons: [
                    {
                        text: 'View CV',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { compId: userDetail.idNumber });
                        }
                    },
                    {
                        text: 'Accept',
                        handler: function () {
                            var alert = _this.alertCtrl.create({
                                message: 'Do you want to accept this applicant?',
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function () {
                                            _this.database.list('users').update(userDetail.idNumber + '/hiring/' + userDetail.id + _this.otluser + userDetail.jobName, {
                                                idNumber: _this.otluser,
                                                compName: userDetail.compName,
                                                jobName: userDetail.jobName,
                                                desc: userDetail.desc,
                                                reqSkill: userDetail.reqSkill,
                                                dob: userDetail.dob,
                                                gender: userDetail.gender,
                                                nationality: userDetail.nationality,
                                                marital: userDetail.marital,
                                                id: userDetail.id,
                                                expDate: userDetail.expDate,
                                                noApp: userDetail.noApp
                                            });
                                            _this.database.list('users').update(userDetail.idNumber, {
                                                accept: 'You got interview calling!'
                                            });
                                            _this.interviewRef.update(userDetail.idNumber + userDetail.jobName, {
                                                idNumber: userDetail.idNumber,
                                                compName: userDetail.compName,
                                                jobName: userDetail.jobName,
                                                desc: userDetail.desc,
                                                reqSkill: userDetail.reqSkill,
                                                dob: userDetail.dob,
                                                gender: userDetail.gender,
                                                nationality: userDetail.nationality,
                                                marital: userDetail.marital,
                                                id: userDetail.id,
                                                expDate: userDetail.expDate,
                                                noApp: userDetail.noApp
                                            });
                                            var data = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/vacancies/' + userDetail.id + _this.otluser + userDetail.jobName);
                                            data.child('noApp').once('value', function (snapshot) {
                                                _this.vacanciesRef.update(userDetail.id + _this.otluser + userDetail.jobName, {
                                                    noApp: snapshot.val() - 1
                                                });
                                            });
                                            __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/').once('value', function (snapshot) {
                                                snapshot.forEach(function (snap) {
                                                    var data = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + snap.key);
                                                    data.child('type').once('value', function (snaps) {
                                                        if (snaps.val() == 'user') {
                                                            var datat = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + snap.key + '/applying/' + userDetail.id + _this.otluser + userDetail.jobName);
                                                            datat.once('value', function (snapsh) {
                                                                console.log('11' + snapsh.key);
                                                                if (snapsh.key == userDetail.id + _this.otluser + userDetail.jobName) {
                                                                    var datan = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/vacancies/' + userDetail.id + _this.otluser + userDetail.jobName);
                                                                    datan.child('noApp').once('value', function (snapsho) {
                                                                        _this.database.list('users').update(snap.key + '/applying/' + userDetail.id + _this.otluser + userDetail.jobName, {
                                                                            noApp: snapsho.val()
                                                                        });
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                    return false;
                                                });
                                            });
                                            _this.jobListRef.remove(userDetail.idNumber + userDetail.jobName);
                                            _this.database.list('users/' + userDetail.idNumber + '/applying/').remove(+userDetail.id + _this.otluser + userDetail.jobName);
                                        }
                                    },
                                    {
                                        text: 'Cancel',
                                    }
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'Reject',
                        handler: function () {
                            var alert = _this.alertCtrl.create({
                                message: 'Reject this applicant?',
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function () {
                                            _this.usersRef.update(userDetail.idNumber, {
                                                reject: 'You have rejected by a company'
                                            });
                                            _this.usersRef.update(userDetail.idNumber + '/applying/' + userDetail.id + _this.otluser + userDetail.jobName, {
                                                noApp: 0,
                                                reqSkill: 'Not applicable'
                                            });
                                            _this.database.list('users/' + _this.otluser + '/applicant').remove(userDetail.idNumber + userDetail.jobName);
                                        }
                                    },
                                    {
                                        text: 'Cancel',
                                    }
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            actionSheet.present();
        }
    };
    VacancyPage.prototype.viewApp = function () {
        this.num = 2;
    };
    VacancyPage.prototype.addJob = function () {
        this.num = 2;
    };
    VacancyPage.prototype.hiring = function () {
        this.num = 3;
    };
    VacancyPage.prototype.callInterview = function () {
        this.num = 3;
    };
    VacancyPage.prototype.checkBack = function () {
        var _this = this;
        var dats = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('/users/' + this.otluser);
        dats.child('type').once('value', function (snapshot) {
            var items = snapshot.val();
            if (items == 'company') {
                _this.num = 1;
            }
            else {
                _this.num = 0;
            }
        });
    };
    VacancyPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    return VacancyPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('jobName'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "jobName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('indType'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "indType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('desc'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "desc", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('reqSkill'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "reqskill", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('workHour'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "workHour", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('dob'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "dob", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('gender'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "gender", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nationality'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "nationality", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('marital'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "marital", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('noApp'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "noApp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('expDate'),
    __metadata("design:type", Object)
], VacancyPage.prototype, "expDate", void 0);
VacancyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vacancy',template:/*ion-inline-start:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\vacancy\vacancy.html"*/'<!-- -------------------------------------------- -->\n  <ion-content *ngIf="num == 0" padding>\n    <button (click)="callInterview()" ion-button color="dark" style="width: 45%;" float-left>Interview</button>\n    <button (click)="addJob()" ion-button color="dark" style="width: 45%;" float-right>Job Applied</button>\n    <h2 style="text-align:center;"><br/>\n      <br/>Available Job:</h2>\n      <ion-searchbar (ionInput)="getItems($event)" style="background-color: #000000;"></ion-searchbar><br/>\n    <ion-list *ngFor="let item of searchList">\n      <ion-item (click)="presentUserActionSheet(item)" style="background-color: #222;">\n        <h2 style="color: #FFFFFF"> {{item.compName}}</h2>\n        <h3 style="color: #FFFFFF">Job Offer: {{item.jobName}}</h3>\n        <h3 style="color: #FFFFFF">Requirements: {{item.reqSkill}}</h3>\n        <h3 style="color: #FFFFFF">Hiring: {{item.noApp}}</h3>\n        <h2 style="color: #FFFFFF;">Offer Expired: {{item.expDate}}</h2>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:60px;"></div>\n  </ion-content>\n\n<!-- -------------------------------------------- -->\n  <ion-content *ngIf="num == 1" padding>\n    <button (click)="viewApp()" ion-button color="dark" style="width: 45%;" float-left>Applicants</button>\n    <button (click)="addVacancy()" ion-button color="dark" style="width: 45%;" float-right>Add Job</button>\n    <h2 style="text-align:center;"><br/><br/>Vacancies Offered:</h2><br/>\n    <div>\n    <ion-list *ngFor="let item of vacanciesRef | async">\n      <ion-item *ngIf="item.id+otluser+item.jobName == item.idNumber" (click)="presentCompActionSheet(item)" style="background-color: #222;">\n        <h2 style="color: #FFFFFF;">Job Offer: {{item.jobName}}</h2>\n        <h2 style="color: #FFFFFF;">Requirements: {{item.reqSkill}}</h2>\n        <h2 style="color: #FFFFFF;">Hiring: {{item.noApp}}</h2>\n        <h2 style="color: #FFFFFF;">Offer Expired: {{item.expDate}}</h2>\n      </ion-item>\n    </ion-list>\n    </div>\n    <div class="spacer" style="height:60px;"></div>\n  </ion-content>\n\n<!-- -------------------------------------------- -->\n  <ion-content *ngIf="num == 2" padding>\n    <div *ngIf="mun == \'company\'">\n      <button (click)="hiring()" ion-button color="dark" style="width: 26%;" float-left>Hiring</button>\n      <button (click)="checkBack()" ion-button color="dark" style="width: 19%;" float-right>Back</button>\n    <br/><br/><h1>Current Applicants: </h1><br/>\n    <ion-list *ngFor="let item of jobListRef | async">\n      <ion-item (click)="presentSelActionSheet(item)" style="background-color: #222;">\n        <h2 style="color: #FFFFFF;">{{item.jobName}}: Applied by {{item.idNumber}}</h2>\n      </ion-item>\n    </ion-list>\n    </div>\n\n    <div *ngIf="mun == \'user\'">\n      <button (click)="checkBack()" ion-button color="dark" style="width: 19%;" float-right>Back</button>\n    <br/><h1>Current Job: </h1><br/>\n    <ion-list *ngFor="let item of appListRef | async">\n      <ion-item *ngIf="item.noApp > 0 && item.label != \'saved\'" (click)="presentSelActionSheet(item)" style="background-color: #222;">\n          <h2 style="color: #FFFFFF;">Job Offer: {{item.jobName}}</h2>\n          <h2 style="color: #FFFFFF;">Requirements: {{item.reqSkill}}</h2>\n          <h2 style="color: #FFFFFF;">Hiring: {{item.noApp}}</h2>\n          <h2 style="color: #FFFFFF;">Offer Expired: {{item.expDate}}</h2>\n      </ion-item>\n      <ion-item *ngIf="item.noApp == 0 && item.label != \'saved\'" (click)="presentSelActionSheet(item)" style="background-color: grey;">\n          <h2 style="color: #FFFFFF;">Job Offer: {{item.jobName}}</h2>\n          <h2 style="color: #FFFFFF;">Requirements: No Longer Available</h2>\n          <h2 style="color: #FFFFFF;">Offer Expired: {{item.expDate}}</h2>\n      </ion-item>\n    </ion-list>\n    <br/><h1>Saved Job: </h1><br/>\n      <ion-list *ngFor="let item of appListRef | async">\n      <ion-item *ngIf="item.noApp > 0  && item.label == \'saved\'" (click)="presentUserActionSheet(item)" style="background-color: #222;">\n          <h2 style="color: #FFFFFF;">Job Offer: {{item.jobName}}</h2>\n          <h2 style="color: #FFFFFF;">Requirements: {{item.reqSkill}}</h2>\n          <h2 style="color: #FFFFFF;">Hiring: {{item.noApp}}</h2>\n          <h2 style="color: #FFFFFF;">Offer Expired: {{item.expDate}}</h2>\n      </ion-item>\n      <ion-item *ngIf="item.noApp == 0 && item.label == \'saved\'" (click)="presentSelActionSheet(item)" style="background-color: grey;">\n          <h2 style="color: #FFFFFF;">Job Offer: {{item.jobName}}</h2>\n          <h2 style="color: #FFFFFF;">Requirements: No Longer Available</h2>\n          <h2 style="color: #FFFFFF;">Offer Expired: {{item.expDate}}</h2>\n      </ion-item>\n    </ion-list>\n    </div>\n    <div class="spacer" style="height:60px;"></div>\n\n  </ion-content>\n\n<!-- -------------------------------------------- -->\n  <ion-content *ngIf="num == 3" padding>\n    <div *ngIf="mun == \'company\'">\n      <button (click)="checkBack()" ion-button color="dark" style="width: 19%;" float-right>Back</button>\n    <br/><h1>Hiring: </h1><br/>\n    <ion-list *ngFor="let item of interviewRef | async">\n      <ion-item style="background-color: #222;">\n        <h2 style="color: #FFFFFF;">{{item.idNumber}} called for {{item.jobName}} interview</h2>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:60px;"></div>\n    </div>\n    \n\n    <div *ngIf="mun == \'user\'">\n      <button (click)="checkBack()" ion-button color="dark" style="width: 19%;" float-right>Back</button>\n    <br/><h1>Interviews: </h1><br/>\n    <ion-list *ngFor="let item of hiringRef | async">\n      <ion-item style="background-color: #222;">\n          <h2 style="color: #FFFFFF;">{{item.jobName}} interview at {{item.compName}}</h2>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:60px;"></div>\n\n    </div>\n    \n  </ion-content>\n\n  <!-- -------------------------------------------- -->\n  <ion-content *ngIf="num == 4" padding>\n\n      <button (click)="checkBack()" ion-button color="dark" style="width: 19%;" float-right>Back</button>\n\n    <h1>Job Details</h1><br/>\n    \n      <ion-item>\n        <ion-label>Job Position:</ion-label>\n          <ion-input type="text" #jobName [(ngModel)]="userDetail.jobName" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Description:</ion-label>\n          <ion-textarea type="text" style="height: 100px;" placeholder="(Rules and Regulations)"  #desc [(ngModel)]="userDetail.desc" [ngModelOptions]="{standalone: true}"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Highest Qualification:</ion-label>\n        <ion-select #reqSkill [(ngModel)]="userDetail.reqSkill" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Master Degree">Master Degree</ion-option>\n          <ion-option value="Degree">Degree</ion-option>\n          <ion-option value="Higher Diploma">Higher Diploma</ion-option>\n          <ion-option value="Diploma">Diploma</ion-option>\n          <ion-option value="A\'Level">A\'Level</ion-option>\n          <ion-option value="O\'Level">O\'level</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Working Hours:</ion-label>\n          <ion-input type="text" placeholder="(Company Operating Hours)" #workHour disabled="true" [(ngModel)]="userDetail.workHour" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Gender:</ion-label>\n        <ion-select #gender [(ngModel)]="userDetail.gender" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Female">Female</ion-option>\n          <ion-option value="Male">Male</ion-option>\n          <ion-option value="Male and Female">Any</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Age Range:</ion-label>\n          <ion-select #dob [(ngModel)]="userDetail.dob" [ngModelOptions]="{standalone: true}">\n          <ion-option value="1990">18 - 27</ion-option>\n          <ion-option value="1980">28 - 37</ion-option>\n          <ion-option value="1970">38 - 47</ion-option>\n          <ion-option value="1963">48 - 55</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Nationality:</ion-label>\n          <ion-select #nationality [(ngModel)]="userDetail.nationality" [ngModelOptions]="{standalone: true}">\n          <ion-option value="America">America</ion-option>\n          <ion-option value="British">British</ion-option>\n          <ion-option value="Brunei">Brunei</ion-option>\n          <ion-option value="Chinese">Chinese</ion-option>\n          <ion-option value="India">India</ion-option>\n          <ion-option value="Indonesia">Indonesia</ion-option>\n          <ion-option value="Malaysia">Malaysia</ion-option>\n          <ion-option value="Singapore">Singapore</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Marital Status:</ion-label>\n          <ion-select #marital [(ngModel)]="userDetail.marital" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Single">Single</ion-option>\n          <ion-option value="Married">Married</ion-option>\n          <ion-option value="Divorced">Divorced</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Number of Hiring:</ion-label>\n          <ion-select #noApp [(ngModel)]="userDetail.noApp" [ngModelOptions]="{standalone: true}">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Expiration Date:</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" min="2018" max="2035" style="border-bottom: solid silver 0.0165px;" #expDate [(ngModel)]="userDetail.expDate" [ngModelOptions]="{standalone: true}"></ion-datetime>\n      </ion-item><br/>\n      <button *ngIf="userDetail.jobName && userDetail.desc && userDetail.reqSkill && userDetail.gender && userDetail.dob && userDetail.nationality && userDetail.marital && userDetail.noApp && userDetail.expDate && userDetail.expDate != undefined" (click)="saveVacancy()" ion-button color="dark" style="width: 100%;">Save</button>\n      <div class="spacer" style="height:60px;"></div>\n      \n\n  </ion-content>\n\n    <!-- -------------------------------------------- -->\n  <ion-content *ngIf="num == 5" padding>\n\n      <button (click)="checkBack()" ion-button color="dark" style="width: 19%;" float-right>Back</button>\n\n    <h1>Job Details</h1><br/>\n    <ion-list *ngFor="let userDetail of vacanciesRef | async">\n      <div *ngIf="job == userDetail.idNumber">\n      <ion-item>\n        <ion-label>Job Position:</ion-label>\n          <ion-input type="text" #jobName [(ngModel)]="userDetail.jobName" [ngModelOptions]="{standalone: true}" disabled="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Description:</ion-label>\n          <ion-textarea type="text" style="height: 100px;" placeholder="(Rules and Regulations)"  #desc [(ngModel)]="userDetail.desc" [ngModelOptions]="{standalone: true}"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Highest Qualification:</ion-label>\n          <ion-select #reqSkill [(ngModel)]="userDetail.reqSkill" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Master Degree">Master Degree</ion-option>\n          <ion-option value="Degree">Degree</ion-option>\n          <ion-option value="Higher Diploma">Higher Diploma</ion-option>\n          <ion-option value="Diploma">Diploma</ion-option>\n          <ion-option value="A\'Level">A\'Level</ion-option>\n          <ion-option value="O\'Level">O\'level</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Working Hours:</ion-label>\n          <ion-input type="text"  placeholder="(Company Operating Hours)" #workHour disabled="true" [(ngModel)]="userDetail.workHour" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Gender:</ion-label>\n        <ion-select #gender [(ngModel)]="userDetail.gender" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Female">Female</ion-option>\n          <ion-option value="Male">Male</ion-option>\n          <ion-option value="Male and Female">Any</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Age Range:</ion-label>\n          <ion-select #dob [(ngModel)]="userDetail.dob" [ngModelOptions]="{standalone: true}">\n          <ion-option value="1990">18 - 27</ion-option>\n          <ion-option value="1980">28 - 37</ion-option>\n          <ion-option value="1970">38 - 47</ion-option>\n          <ion-option value="1963">48 - 55</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Nationality:</ion-label>\n          <ion-select #nationality [(ngModel)]="userDetail.nationality" [ngModelOptions]="{standalone: true}">\n          <ion-option value="America">America</ion-option>\n          <ion-option value="British">British</ion-option>\n          <ion-option value="Brunei">Brunei</ion-option>\n          <ion-option value="Chinese">Chinese</ion-option>\n          <ion-option value="India">India</ion-option>\n          <ion-option value="Indonesia">Indonesia</ion-option>\n          <ion-option value="Malaysia">Malaysia</ion-option>\n          <ion-option value="Singapore">Singapore</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Marital Status:</ion-label>\n          <ion-select #marital [(ngModel)]="userDetail.marital" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Single">Single</ion-option>\n          <ion-option value="Married">Married</ion-option>\n          <ion-option value="Divorced">Divorced</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Number of Hiring:</ion-label>\n          <ion-select #noApp [(ngModel)]="userDetail.noApp" [ngModelOptions]="{standalone: true}">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Expiration Date:</ion-label>\n        <ion-input type="text" value="{{userDetail.expDate}}" #expDate disabled="true" [(ngModel)]="userDetail.expDate" disabled="true" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item><br/>\n      <button *ngIf="userDetail.jobName && userDetail.desc && userDetail.reqSkill && userDetail.gender && userDetail.dob && userDetail.nationality && userDetail.marital && userDetail.noApp && userDetail.expDate && userDetail.expDate != \'\'" (click)="saveChangeVacancy(userDetail)" ion-button color="dark" style="width: 100%;">Save Change</button>\n      <div class="spacer" style="height:60px;"></div>\n    </div>\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\vacancy\vacancy.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _f || Object])
], VacancyPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=vacancy.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(587);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_vacancy_vacancy__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_location_location__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseAuth = {
    apiKey: "AIzaSyC1QwquzD0cUD5oSgtBT4jQXBZq0nZHq88",
    authDomain: "yourcareer-259a1.firebaseapp.com",
    databaseURL: "https://yourcareer-259a1.firebaseio.com",
    projectId: "yourcareer-259a1",
    storageBucket: "yourcareer-259a1.appspot.com",
    messagingSenderId: "155763066433"
};
var cloudSettings = {
    'core': {
        'app_id': 'f44a7627'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_vacancy_vacancy__["a" /* VacancyPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_location_location__["a" /* LocationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_vacancy_vacancy__["a" /* VacancyPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_location_location__["a" /* LocationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = LoginPage_1 = (function () {
    function LoginPage(alertCtrl, fire, database, app, navCtrl, navParams, actionSheetCtrl) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.database = database;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.splash = true;
        this.guest = false;
        this.userDetail = {};
        this.tabBarElement = document.querySelector('.tabbar');
        this.userRef = this.database.list('users');
        this.jobListRef = this.database.list('vacancies');
        this.statis = this.database.list('xstats');
        this.fire.auth.signOut();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.database.list('stats');
        var stat = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/xstats/');
        stat.child('createdJob').once('value', function (statistic) {
            console.log('find: ' + statistic.val());
            if (statistic.val() == null) {
                _this.statis.set('createdJob', 9999);
            }
        });
        setTimeout(function () {
            _this.splash = false;
        }, 3000);
    };
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Information!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.signInUser = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.idNumber.value.split(' ').join("") + "@YC.COM", this.password.value)
            .then(function (data) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (error) {
            if (error.message == 'The email address is badly formatted.') {
                _this.alert('Enter a valid IC/License Number!');
            }
            else {
                _this.alert(error.message);
            }
        });
    };
    LoginPage.prototype.resetPassword = function () {
        var _this = this;
        this.fire.auth.sendPasswordResetEmail(this.idNumber.value.split(' ').join("") + '@YC.COM').then(function (user) {
            var data = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + _this.idNumber.value.split(' ').join(""));
            data.child('question').once('value', function (snapshot) {
                var item = snapshot.val();
                var alert = _this.alertCtrl.create({
                    title: 'Reset Password',
                    subTitle: '-Answer following question if you know the answer.',
                    message: 'Q: "' + item + '"',
                    inputs: [{
                            name: 'answer',
                            placeholder: 'Enter your answer?'
                        }],
                    buttons: [{
                            text: "Proceed",
                            handler: function (data) {
                                // Check if Correct Answer and Valid
                                var datas = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + _this.idNumber.value.split(' ').join(""));
                                datas.child('answer').once('value', function (snapshot) {
                                    var items = snapshot.val();
                                    // If Correct proceed with Changing Password 
                                    if (items == data.answer) {
                                        var datasec = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + _this.idNumber.value.split(' ').join(""));
                                        datasec.child('password').once('value', function (snapshot) {
                                            _this.idAccess = _this.idNumber.value;
                                            _this.fire.auth.signInWithEmailAndPassword(_this.idAccess + "@YC.COM", snapshot.val().toString())
                                                .then(function (datac) {
                                                // Delete User
                                                var user = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().currentUser;
                                                user.delete();
                                                console.log('User status: ' + user.email);
                                                var alerts = _this.alertCtrl.create({
                                                    title: 'Change Password',
                                                    inputs: [{
                                                            name: 'newP',
                                                            type: 'password',
                                                            placeholder: 'Enter your New Password'
                                                        }, {
                                                            name: 'douP',
                                                            type: 'password',
                                                            placeholder: 'Re-Enter your New Password'
                                                        }],
                                                    buttons: [{
                                                            text: "Change",
                                                            handler: function (datan) {
                                                                if (datan.newP == datan.douP) {
                                                                    _this.fire.auth.createUserWithEmailAndPassword(_this.idAccess + "@YC.COM", datan.newP).then(function (data) {
                                                                        var user = _this.fire.auth.currentUser;
                                                                        user.updateProfile({
                                                                            displayName: _this.idAccess,
                                                                            photoURL: ""
                                                                        }).then(function () {
                                                                            __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().signOut();
                                                                        }).catch(function (error) { });
                                                                    }).catch(function (error) {
                                                                        _this.alert(error.message);
                                                                    });
                                                                    _this.userRef.update(_this.idAccess, {
                                                                        password: datan.newP,
                                                                    });
                                                                    _this.alert('Success!, please login with your new password.');
                                                                }
                                                                else {
                                                                    _this.fire.auth.createUserWithEmailAndPassword(_this.idAccess + "@YC.COM", snapshot.val().toString()).then(function (data) {
                                                                        var user = _this.fire.auth.currentUser;
                                                                        user.updateProfile({
                                                                            displayName: _this.idAccess,
                                                                            photoURL: ""
                                                                        }).then(function () {
                                                                            __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().signOut();
                                                                        }).catch(function (error) { });
                                                                    }).catch(function (error) {
                                                                        _this.alert(error.message);
                                                                    });
                                                                    _this.alert('Unsuccessful! password is mismatched.');
                                                                }
                                                            }
                                                        }]
                                                });
                                                alerts.present();
                                            }).catch(function (error) {
                                                console.log('got an error', error);
                                                _this.alert(error.message);
                                            });
                                            _this.app.getRootNav().setRoot(LoginPage_1);
                                        });
                                        _this.idAccess = undefined;
                                    }
                                    else {
                                        _this.alert('Wrong answer, please try again.');
                                    }
                                });
                            }
                        }, {
                            text: 'Cancel',
                            role: 'cancel'
                        }]
                });
                alert.present();
            });
        }, function (error) {
            var errorMessage = error.message;
            var errorAlert = _this.alertCtrl.create({
                message: 'Please enter a valid IC/License number!',
                buttons: [{ text: "Ok", role: 'cancel' }]
            });
            errorAlert.present();
        });
    };
    LoginPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Register as ..',
            buttons: [{
                    text: 'USER(JOBSEEKER)',
                    role: 'destructive',
                    handler: function () {
                        _this.register('user');
                    }
                }, {
                    text: 'COMPANY',
                    handler: function () {
                        _this.register('company');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }]
        });
        actionSheet.present();
    };
    LoginPage.prototype.register = function (sel) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */], { sel: sel });
    };
    LoginPage.prototype.goGuest = function () {
        this.guest = true;
    };
    LoginPage.prototype.goBack = function () {
        this.guest = false;
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('idNumber'),
    __metadata("design:type", Object)
], LoginPage.prototype, "idNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], LoginPage.prototype, "password", void 0);
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])({ name: 'login' }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\login\login.html"*/'<ion-content *ngIf="!guest" padding>\n  <div class="spacer" style="height:5%;"></div>\n    <div>\n      <img src="assets/logos.png" style="\n        display:block;width:90%;height:100%;\n        margin-left:auto;margin-right:auto;"/>\n    </div>\n  <div class="spacer" style="height:10px;"></div>\n  <ion-item style="background-color:transparent;">\n    <ion-label style="color: #222;">LOGIN as: </ion-label>\n    <ion-select #logType>\n      <ion-option value="User">User (JobSeeker)</ion-option>\n      <ion-option value="Company">Company</ion-option>\n    </ion-select>\n  </ion-item>\n  <form>\n    <ion-list *ngIf="logType.value == \'User\'"><ion-item style="background-color:transparent;">\n        <ion-label floating>\n        IC/License Number</ion-label>\n        <ion-input type="text" #idNumber [(ngModel)]="caps" (ngModelChange)="caps = $event.toLocaleUpperCase()" [ngModelOptions]="{standalone: true}"></ion-input>\n    </ion-item></ion-list>\n    <ion-list *ngIf="logType.value == \'Company\'"><ion-item style="background-color:transparent;">\n        <ion-label floating>\n        Company Name</ion-label>\n        <ion-input type="text" #idNumber [(ngModel)]="caps" (ngModelChange)="caps = $event.toLocaleUpperCase()" [ngModelOptions]="{standalone: true}"></ion-input>\n    </ion-item></ion-list>\n\n    <ion-list *ngIf="logType.value != \'\'"><ion-item style="background-color:transparent;">\n        <ion-label floating>\n        Password</ion-label>\n        <ion-input type="password" #password></ion-input>\n    </ion-item></ion-list>\n\n    <button *ngIf="logType.value != \'\'" style="color:#222;background-color:transparent;" (click)="resetPassword()">\n    - Forgot your password?</button>\n\n    <div class="spacer" style="width:300px;height:20px;"></div>\n\n    <button *ngIf="logType.value == \'\'" ion-button disabled="true" color="balanced" block style="\n    font-weight:500;color:#FFFFFF;border-radius:2px 2px 2px 2px;background-color:#000000"\n    (click)="signInUser()">\n      Log in\n    </button>\n    <button *ngIf="logType.value != \'\'" ion-button color="balanced" block style="\n    font-weight:500;color:#FFFFFF;border-radius:2px 2px 2px 2px;background-color:#000000"\n    (click)="signInUser()">\n      Log in\n    </button>\n\n    <button ion-button clear color="dark" block (click)="presentActionSheet()">\n      Register\n    </button>\n\n    <button ion-button clear color="dark" style="font-style: italic;" block (click)="goGuest()">\n      or Login as Guest\n    </button>\n  </form>\n</ion-content>\n\n<ion-content *ngIf="guest" padding>\n  <button (click)="goBack()" ion-button color="dark" style="width: 45%;" float-right>Done</button>\n  <h2 style="text-align:center;"><br/>\n    <br/>Available Job:</h2>\n  <ion-list *ngFor="let item of jobListRef | async">\n    <ion-item style="background-color: #222;">\n      <h2 style="color: #FFFFFF"> {{item.compName.toUpperCase()}}</h2>\n      <h3 style="color: #FFFFFF">Job Offer: {{item.jobName}}</h3>\n      <h3 style="color: #FFFFFF">Requirements: {{item.reqSkill}}</h3>\n      <h3 style="color: #FFFFFF">Hiring: {{item.noApp}}</h3>\n      <h3 style="color: #FFFFFF">Expiration Date: {{item.expDate}}</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\MOC_Admin\Desktop\YourCareer\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ })

},[582]);
//# sourceMappingURL=main.js.map