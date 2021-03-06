import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../../registration.service';
import { IAddress } from '../../../../common/models/IRegistration-data';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  address: IAddress;
  isFormValid: boolean;
  constructor(private http: HttpClient,
              private registrationService: RegistrationService) {}


  onFormChange(address: IAddress): void {
    this.address = address;
  }

  onStatusChange(status: boolean): void {
    this.isFormValid = status;
  }
  onSubmit(): void {
    console.log(this.address);
    console.log(this.isFormValid);
    if (this.isFormValid) {
      this.registrationService.setAddress(this.address);
      }
    }
}
