import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IAddress, IBasicInfo, IPersonalInfo,
  IRegistrationForm, IPetsitterServices, IPetsitterPhotosDto
} from './IRegistration-data';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  registerData: IRegistrationForm = {
    basicInfoDto: {} as IBasicInfo,
    addressDto: {} as IAddress,
    personalInfoDto: {} as IPersonalInfo,
    servicesDto: {} as IPetsitterServices,
    petSitterPhotosDto: {} as IPetsitterPhotosDto
  };

  constructor(private http: HttpClient) {
  }


  setBasicInfo(basicInfo: IBasicInfo): void {
    console.log(basicInfo);
    this.registerData.basicInfoDto = basicInfo;
  }

  setAddress(address: IAddress): void {
    console.log(address);
    this.registerData.addressDto = address;
  }

  setPersonalInfo(personalInfo: IPersonalInfo): void {
    console.log(personalInfo);
    this.registerData.personalInfoDto = personalInfo;
  }
  setServices(services: IPetsitterServices): void{
    console.log(services);
    this.registerData.servicesDto = services;
    // For mock purposes
    this.setPetsitterGallery();
  }
  setPetsitterGallery(): void{
    const mockData = [
      './../assets/PetsitterDetail/ExamplePetsitter/1.jpg',
      './../assets/PetsitterDetail/ExamplePetsitter/2.jpg',
      './../assets/PetsitterDetail/ExamplePetsitter/3.jpg',
      './../assets/PetsitterDetail/ExamplePetsitter/4.jpg',
      './../assets/PetsitterDetail/ExamplePetsitter/5.jpg'];
    this.registerData.petSitterPhotosDto.photoId = mockData[0];
    this.registerData.petSitterPhotosDto.photoGallery = mockData;
    // TODO: cloudinary db for photos in feature
  }

  saveUser(): void {
    this.http.post('https://ng-component-guide-78d02-default-rtdb.firebaseio.com/posts.json', this.registerData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
