export interface UserDetail {
  $key?: string,
  type: string;
  photo: any;
  lat: Number;
  lng: Number;
  stat: number;
  id: number;
  
//Personal Details
  fullName: string;
  color: string;
  nationality: string;
  gender: string;
  dob: string;
  marital: string;
  liNumber: string;
  //Qualification Details
  hiQual: string;
  mdgree: string;
  degree: string;
  hnd: string;
  diploma: string;
  alevel: string;
  olevel: string;
  qual1: Boolean;
  lang: string;
  usage: string;

  engLang: string;
  malLang: string;
  other1: Boolean;
  lang1: string;
  lang1s: string;
  //Job Details
  jobExp: string;
  jobExpPos: string;
  jobExpYear: string;
  jobExp1: string;
  jobExp1Pos: string;
  jobExp1Year: string;
  jobExp2: string;
  jobExp2Pos: string;
  jobExp2Year: string;
  jobExp3: string;
  jobExp3Pos: string;
  jobExp3Year: string;
  jobExp4: string;
  jobExp4Pos: string;
  jobExp4Year: string;
  jobExpTotal: Number;

// Company Detail
  compName: string;
  indType: string;
  desc: string;
  vacanOffer: string;
  workHour: string;
  //Vacancy Details
  jobName: string;
  reqSkill: string;
  noApp: number;
  expDate: string;

//Contact Details
  address: string;
  postcode: string;
  emNum: Number;
  contactNum: Number;
  email: string;

//Security Details
  idNumber: string;
  question: string;
  answer: string;
  password: string;
}