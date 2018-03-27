import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { UserDetail } from '../../models/interfaces/user-details.interface';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import firebases from 'firebase';

@Component({
  selector: 'page-vacancy',
  templateUrl: 'vacancy.html'
})

export class VacancyPage {

  @ViewChild('jobName') jobName;
  @ViewChild('indType') indType;
  @ViewChild('desc') desc;
  @ViewChild('reqSkill') reqskill;
  @ViewChild('workHour') workHour;
  @ViewChild('dob') dob;
  @ViewChild('gender') gender;
  @ViewChild('nationality') nationality;
  @ViewChild('marital') marital;
  @ViewChild('noApp') noApp;
  @ViewChild('expDate') expDate;

  user: Observable<firebase.User>;
  items: Array<any[]>;
  userDetail = {} as UserDetail;
  statis: FirebaseListObservable<UserDetail[]>;
  usersRef: FirebaseListObservable<UserDetail[]>
  vacanciesRef: FirebaseListObservable<UserDetail[]>
  appListRef: FirebaseListObservable<UserDetail[]>
  jobListRef: FirebaseListObservable<UserDetail[]>
  hiringRef: FirebaseListObservable<UserDetail[]>
  interviewRef: FirebaseListObservable<UserDetail[]>
  searchListRef: FirebaseListObservable<any>

  searchList: any;
  loadedsearchList: any;
  searchRef:firebases.database.Reference;
  date: string = new Date().toISOString();
  otluser: string = '';
  job: string;
  num: number;
  mun: string;

  constructor(
    public fire: AngularFireAuth, public navCtrl: NavController,
    public navParams: NavParams, private database: AngularFireDatabase, 
    private alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController) {

    var user = fire.auth.currentUser;
    var name = user.displayName;
    this.otluser = name;

    this.statis = this.database.list('xstats');
    this.vacanciesRef = this.database.list('vacancies');
    this.appListRef = this.database.list('users/'+this.otluser+'/applying');
    this.usersRef = this.database.list('users');
    this.jobListRef = this.database.list('users/'+this.otluser+'/applicant');
    this.hiringRef = this.database.list('users/'+this.otluser+'/hiring');
    this.interviewRef = this.database.list('users/'+this.otluser+'/interview');
    var dats = firebase.database().ref('/users/'+this.otluser);
      dats.child('type').once('value', (snapshot) => {
      var items = snapshot.val();
      if (items == 'company') { 
        this.num = 1;
        this.mun = 'company';
      } else {
        this.num = 0;
        this.mun = 'user';
      }
    });
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter() {
    var appliedJob = 0; 

    this.searchRef = firebases.database().ref('/users/'+this.otluser+'/applying/');
    this.searchRef.on('value', applied => {
      applied.forEach( search => {
        appliedJob = appliedJob + 1;
        return false;
      });
    });

    this.searchRef = firebases.database().ref('/vacancies');
    this.searchRef.on('value', searchList => {
      let searches = [];
      var size = 0;
      searchList.forEach( search => {
        var length = 0;
        var dats = firebase.database().ref('/vacancies/'+search.key);
          dats.child('noApp').once('value', (noApp) => {
            var hiring = noApp.val();
            if (hiring == 0) {
              this.database.list('/vacancies/'+search.key).remove();
            } else {console.log('a '+search.key);
              var dats = firebase.database().ref('/vacancies/'+search.key);
              dats.child('expDate').once('value', (expDate) => {
                if (parseInt(expDate.val().split('-').join("")) < parseInt(this.date.substring(0,10).split('-').join(""))) {
                  console.log('Deleted: '+search.key);
                  this.database.list('/vacancies/'+search.key).remove();
                } else {

                }
              });
            }              
          });   
        firebase.database().ref('/users/'+this.otluser+'/applying/').once('value', (snapshot) => {
          if (snapshot.val() == null) {
            searches.push(search.val());
          } else {
            snapshot.forEach( job => {
              length = length + 1;
              var dats = firebase.database().ref('/users/'+this.otluser+'/applying');
                dats.child('noApp').once('value', (noApp) => {
                var items = noApp.val();
                if (job.key == search.key) {
                  length = appliedJob + 1;
                  return false;
                } else if (job.key != search.key && search.key != 'ExpDate') {
                  if (length == appliedJob) {
                    searches.push(search.val());
                  }
                }                
              });     
              return false;                            
            });
          }          
          this.searchList = searches;
      this.loadedsearchList = searches;
        });
        return false;
      });
      
    });
  }

  initializeItems(): void {
    this.searchList = this.loadedsearchList;
  }

  getItems(searchbar) {
    this.initializeItems();
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.searchList = this.searchList.filter((v) => {
      if(v.compName && v.jobName && q) {
        if (v.compName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        } else if(v.jobName.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

  addVacancy() {
    this.num = 4;
  }

  saveVacancy() {
    var existed;
    var curDate = new Date().toISOString().substring(0,10).split('-').join("");

    var dats = firebase.database().ref('/users/'+this.otluser);
      dats.child('compName').once('value', (snapshot) => {
        var items = snapshot.val();
        for (var i = 9999; i > 0; i--) {
          var dat = firebase.database().ref('vacancies/'+i+this.otluser+this.jobName.value);
          dat.child('idNumber').once('value', (snapID) => {
            var item = snapID.val();
            if (item == i+this.otluser+this.jobName.value) {
              existed = true;
            }
          });
        }

            if (existed) {
              this.alert('You have already offer this job.');
            } else {console.log('Got it, this job have not added yet.');
            var pickDate
            if (this.userDetail.expDate != undefined) {
              pickDate = this.userDetail.expDate.split('-').join("");
            }
              if (parseInt(pickDate) < parseInt(curDate)) {
                this.alert('Expiration date cannot be previous date.');
              } else {
                let alert = this.alertCtrl.create({
                  title: 'Confirmation',
                  message: "Do you want to offer this job?",
                  buttons: [
                    {
                      text: "Yes",
                      handler: () => {
                        var data = firebase.database().ref('/xstats/');
                        data.child('createdJob').once('value', (statistic) => {
                          var getNewID = statistic.val();console.log('id: '+statistic.val());
                          this.vacanciesRef.update(statistic.val()+this.otluser+this.jobName.value, {
                            idNumber: statistic.val()+this.otluser+this.jobName.value,
                            compName: items,
                            jobName: this.jobName.value,
                            desc: this.desc.value,
                            reqSkill: this.reqskill.value,
                            workHour: this.workHour.value,
                            dob: this.dob.value,
                            gender: this.gender.value,
                            nationality: this. nationality.value,
                            marital: this.marital.value,
                            expDate: this.userDetail.expDate,
                            id: statistic.val(),
                            noApp: this.noApp.value
                          });
                          this.statis.update('/', {createdJob: statistic.val()-1});

                          firebase.database().ref('/users/').once('value', (snapshot) => {
                            snapshot.forEach( snap => {
                              var data = firebase.database().ref('/users/'+snap.key);
                                data.child('type').once('value', (snapshot) => {
                                  if (snapshot.val() == 'user') {
                                    this.database.list('users').update(snap.key, {
                                      newjob: 'New vacancy is available!'
                                    });
                                  }
                                });
                              return false;
                            });
                          });
                          this.userDetail = {} as UserDetail;
                          this.vacanciesRef = this.database.list('vacancies/');
                          this.checkBack();
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
  }// Important 1st

  saveChangeVacancy(userDetail) {
    var dats = firebase.database().ref('/users/'+this.otluser);
      dats.child('compName').once('value', (snapshot) => {
        var items = snapshot.val();
              
        let alert = this.alertCtrl.create({
          title: 'Confirmation',
          message: "Do you want to save these changes?",
          buttons: [
            {
              text: "Yes",
              handler: () => {
                console.log('ID '+userDetail.idNumber);
                this.vacanciesRef.update(userDetail.idNumber, {
                  desc: this.desc.value,
                  reqSkill: this.reqskill.value,
                  dob: this.dob.value,
                  gender: this.gender.value,
                  nationality: this. nationality.value,
                  marital: this.marital.value,
                  noApp: this.noApp.value
                });

                this.userDetail = {} as UserDetail;
                this.vacanciesRef = this.database.list('vacancies/');
                this.checkBack();
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
  }// Important 2nd

  editVacancy(userDetail: UserDetail) {
    this.job = userDetail.idNumber;
    console.log('Job: '+this.job);
    this.num = 5;
  }// Important 3rd

  presentUserActionSheet(userDetail: UserDetail) {
    let actionSheet = this.actionSheetCtrl.create({
      title: userDetail.jobName,
      subTitle: '> Select an Option',
      buttons: [
        {
          text: 'About Company',
          handler: () => {
             this.navCtrl.push(HomePage, {
               compId: userDetail.compName.split(' ').join("")});
          }
        },
        {
          text: 'Job Details',
          handler: () => {
            let alertja = this.alertCtrl.create({
              title: userDetail.compName,
              subTitle: 'Position Offer: '+userDetail.jobName+'<br/>'
              +'Description: '+userDetail.desc+'<br/>'
              +'Requirements: '+userDetail.reqSkill+'<br/>'
              +'Working Hours: '+userDetail.workHour+'<br/>'
              +'Age Range: '+(2008-parseInt(userDetail.dob))+' to '+(2017-parseInt(userDetail.dob))+'<br/>'
              +'Gender: '+userDetail.gender+'<br/>'
              +'Nationality: '+userDetail.nationality+'<br/>'
              +'Marital Status: '+userDetail.marital+'<br/>'
              +'expDate: '+userDetail.expDate+'<br/>'
              +'Hiring: '+userDetail.noApp+'<br/>',

              buttons: [
                {
                  text: 'Apply',
                  handler: () => {
                    let alertaj = this.alertCtrl.create({
                      title: 'Confirmation',
                      message: "Do you want to apply?",
                      buttons: [
                        {
                          text: "Yes",
                          handler: () => {
                            this.database.list('users/'+userDetail.compName.split(' ').join("")+'/applicant').update(this.otluser+userDetail.jobName, {
                              idNumber: this.otluser,
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
                          this.database.list('users').update(this.otluser+'/applying/'+userDetail.idNumber, {
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
                          this.database.list('users').update(userDetail.compName.split(' ').join(""), {
                            newapp: 'Got new applicants!'
                          });
                          this.ionViewDidEnter();
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
                        }
                        ,{
                          text: 'Close',
                          role: 'cancel'
                        }
                      ]
                    });
                    alertja.present();
            this.ionViewDidEnter();
          }
        },
        {
          text: 'Apply Job',
          handler: () => {
            let alert = this.alertCtrl.create({
              title: 'Confirmation',
              message: "Do you want to apply?",
              buttons: [
                {
                  text: "Yes",
                  handler: () => {
                      this.database.list('users/'+userDetail.compName.split(' ').join("")+'/applicant').update(this.otluser+userDetail.jobName, {
                        idNumber: this.otluser,
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
                    this.database.list('users').update(this.otluser+'/applying/'+userDetail.idNumber, {
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
                    this.database.list('users').update(userDetail.compName.split(' ').join(""), {
                      newapp: 'Got new applicants!'
                    });
                    this.ionViewDidEnter();
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
          handler: () => {
            let alert = this.alertCtrl.create({
              title: 'Confirmation',
              message: "Do you want to save this job?",
              buttons: [
                {
                  text: "Yes",
                  handler: () => {
                    this.database.list('users').update(this.otluser+'/applying/'+userDetail.idNumber, {
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
                    this.ionViewDidEnter();
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
  }

  presentCompActionSheet(userDetail: UserDetail) {
    let actionSheet = this.actionSheetCtrl.create({
      title: userDetail.jobName,
      subTitle: '> Select an Option:',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.editVacancy(userDetail);
          }
        },
        {
          text: 'Close Offer',
          handler: () => {
           var dats = firebase.database().ref('/users/'+this.otluser);
            dats.child('compName').once('value', (snapshot) => {
              let alert = this.alertCtrl.create({
                title: 'Caution!',
                message: 'All '+userDetail.jobName+' applicants and vacancy offers will be lost, do you want to continue?',
                buttons: [
                  {
                    text: 'Yes',
                    handler: () => {
                      firebase.database().ref('/users/').once('value', (doThis) => {
                        doThis.forEach( users => {
                          firebase.database().ref('/users/'+users.key+'/applying/').once('value', (update) => {
                            update.forEach( jobs => {
                              if (jobs.key == userDetail.id+this.otluser+userDetail.jobName) {
                                this.database.list('users').update(users.key+'/applying/'+userDetail.id+this.otluser+userDetail.jobName, {
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
                      firebase.database().ref('/users/'+this.otluser+'/applicant/').once('value', (snapshot) => {
                        snapshot.forEach( user => {console.log('r '+user.key);
                          firebase.database().ref('/users/'+user.key.split(userDetail.jobName).join("")+'/applying/').once('value', (snapshot) => {
                            snapshot.forEach( job => {console.log('r '+job.key);
                              if (job.key == userDetail.id+this.otluser+userDetail.jobName) {
                                this.database.list('users').update(user.key.split(userDetail.jobName).join("")+'/applying/'+userDetail.id+this.otluser+userDetail.jobName, {
                                  noApp: 0,
                                  reqSkill: 'No Longer Available'
                                });
                                this.jobListRef.remove(user.key);
                              }
                              return false;
                            });
                          });
                          return false;
                        });
                      });
                      this.vacanciesRef.remove(userDetail.id+this.otluser+userDetail.jobName);
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
  }

  presentSelActionSheet(userDetail: UserDetail) {
    if (this.mun == 'user') {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Select an Option:',
        buttons: [
          {
            text: 'About Company',
            handler: () => {
               this.navCtrl.push(HomePage, {compId: userDetail.compName.split(' ').join("")});
            }
          },
          {
            text: 'Job Details',
            handler: () => {
              let alert = this.alertCtrl.create({
                title: userDetail.compName,
              subTitle: 'Position Offer: '+userDetail.jobName+'<br/>'
              +'Description: '+userDetail.desc+'<br/>'
              +'Requirements: '+userDetail.reqSkill+'<br/>'
              +'Working Hours: '+userDetail.workHour+'<br/>'
              +'Age Range: '+(2008-parseInt(userDetail.dob))+' to '+(2017-parseInt(userDetail.dob))+'<br/>'
              +'Gender: '+userDetail.gender+'<br/>'
              +'Nationality: '+userDetail.nationality+'<br/>'
              +'Marital Status: '+userDetail.marital+'<br/>'
              +'expDate: '+userDetail.expDate+'<br/>'
              +'Hiring: '+userDetail.noApp+'<br/>',
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
          handler: () => {
              let alert = this.alertCtrl.create({
                message: 'Cancel this application?',
                buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      this.database.list('users/'+userDetail.compName.split(' ').join("")+'/applicant').remove(this.otluser+userDetail.jobName);
                      this.appListRef.remove(userDetail.idNumber);
                      this.ionViewDidEnter();
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
    } else {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select an Option:',
      buttons: [
        {
          text: 'View CV',
          handler: () => {
             this.navCtrl.push(HomePage, {compId: userDetail.idNumber});
          }
        },
        {
          text: 'Accept',
          handler: () => {
            let alert = this.alertCtrl.create({
              message: 'Do you want to accept this applicant?',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                     this.database.list('users').update(userDetail.idNumber+'/hiring/'+userDetail.id+this.otluser+userDetail.jobName, {
                        idNumber: this.otluser,
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
                      this.database.list('users').update(userDetail.idNumber, {
                        accept: 'You got interview calling!'
                      });
                      this.interviewRef.update(userDetail.idNumber+userDetail.jobName, {
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

                    var data = firebase.database().ref('/vacancies/'+userDetail.id+this.otluser+userDetail.jobName);
                      data.child('noApp').once('value', (snapshot) => {
                      this.vacanciesRef.update(userDetail.id+this.otluser+userDetail.jobName,{
                        noApp: snapshot.val() - 1
                      });
                    });
                    firebase.database().ref('/users/').once('value', (snapshot) => {
                      snapshot.forEach( snap => {
                        var data = firebase.database().ref('/users/'+snap.key);
                          data.child('type').once('value', (snaps) => {
                            if (snaps.val() == 'user') {
                              var datat = firebase.database().ref('/users/'+snap.key+'/applying/'+userDetail.id+this.otluser+userDetail.jobName)
                              datat.once('value', (snapsh) => {
                                console.log('11'+snapsh.key);
                                if (snapsh.key == userDetail.id+this.otluser+userDetail.jobName) {
                                  var datan = firebase.database().ref('/vacancies/'+userDetail.id+this.otluser+userDetail.jobName);
                                  datan.child('noApp').once('value', (snapsho) => {
                                    this.database.list('users').update(snap.key+'/applying/'+userDetail.id+this.otluser+userDetail.jobName, {
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
                    this.jobListRef.remove(userDetail.idNumber+userDetail.jobName);
                    this.database.list('users/'+userDetail.idNumber+'/applying/').remove(+userDetail.id+this.otluser+userDetail.jobName);
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
          handler: () => {
              let alert = this.alertCtrl.create({
                message: 'Reject this applicant?',
                buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      this.usersRef.update(userDetail.idNumber,{
                        reject: 'You have rejected by a company'
                      });
                      this.usersRef.update(userDetail.idNumber+'/applying/'+userDetail.id+this.otluser+userDetail.jobName, {
                        noApp: 0,
                        reqSkill: 'Not applicable'
                      });
                      this.database.list('users/'+this.otluser+'/applicant').remove(userDetail.idNumber+userDetail.jobName);
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
  }

  viewApp() {
    this.num = 2;
  }

  addJob() {
    this.num = 2;
  }

  hiring() {
    this.num = 3;
  }

  callInterview() {
    this.num = 3;
  }

  checkBack() {
    var dats = firebase.database().ref('/users/'+this.otluser);
      dats.child('type').once('value', (snapshot) => {
      var items = snapshot.val();
      if (items == 'company') { 
        this.num = 1;
      } else {
        this.num = 0;
      }
    });
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

}
