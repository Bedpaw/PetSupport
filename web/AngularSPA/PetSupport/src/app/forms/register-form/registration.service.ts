import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IAddress, IBasicInfo, IPersonalInfo,
  IRegistrationForm, IPetsitterServices, IPetsitterPhotosDto
} from './IRegistration-data';

const PETSITTER_URL = 'http://localhost:5001/api/User';
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
    this.registerData.basicInfoDto = basicInfo;
  }

  setAddress(address: IAddress): void {
    this.registerData.addressDto = address;
  }

  setPersonalInfo(personalInfo: IPersonalInfo): void {
    this.registerData.personalInfoDto = personalInfo;
  }
  setServices(services: IPetsitterServices): void{
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
    console.log(this.registerData);
    delete this.registerData.servicesDto.service;
    this.registerData.servicesDto.serviceType = 1;
    delete this.registerData.basicInfoDto.phone;
    this.registerData.basicInfoDto.phoneNumber = '555666777';
    this.http.post<IRegistrationForm>(PETSITTER_URL, this.registerData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
