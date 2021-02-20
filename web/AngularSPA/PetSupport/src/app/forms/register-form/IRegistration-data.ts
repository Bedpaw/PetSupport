import {FormControl, FormGroup} from '@angular/forms';
export interface IBasicInfo {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}
export interface IAddress {
    street: string;
    city: string;
    zipCode: string;
    housenr: string;
    country: string;
    coordinates: [{
      latitude: number;
      longitude: number;
    }];
}
export interface IPersonalInfo {
    birthday: string;
    title: string;
    experience: string;
    availability: string;
    environment: string;
}
export interface IRegistrationForm {
    basicInfoDto: IBasicInfo;
    addressDto: IAddress;
    personalInfoDto: IPersonalInfo;
    servicesDto: IPetsitterServices;
    petSitterPhotosDto: IPetsitterPhotosDto;
}
export interface IPetsitterPhotosDto {
    photoId: string;
    photoGallery: string[];
}

export interface IPetsitterServices {
  service: number;
  petPreferences: string;
  // DO NOT REMOVE THIS IS FOR FEAUTURE DEVELOPMENT
  //   {
  //   dog: string | null;
  //   cat: string | null;
  //   other: string | null;
  // };
  // DO NOT REMOVE THIS IS FOR FEAUTURE DEVELOPMENT
}
// this.services = this.fb.group({
//   service: 'boarding',
//   extraServices: this.fb.group( {
//     dog: false,
//     cat: false,
//     other: false
//   })

// range: new FormGroup({
//   start: new FormControl(),
//   end: new FormControl()
// })
