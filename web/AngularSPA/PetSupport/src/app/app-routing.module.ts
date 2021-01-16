import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BecomePetsitterComponent} from './pages/become-petsitter/become-petsitter.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {PettsittersComponent} from './pages/petsitters/pettsiters/pettsiters.component';
import {PetsitterComponent} from './pages/petsitters/petsitter/petsitter.component';
import {AddressComponent} from './forms/register-form/address/address.component';
import {BasicInfoComponent} from './forms/register-form/basic-info/basic-info.component';
import {PersonalInfoComponent} from './forms/register-form/personal-info/personal-info.component';
import {ServicesComponent} from './forms/register-form/services/services.component';
import {LoginFormComponent} from './forms/login-form/login-form.component';
import {ContactFormComponent} from './pages/contact-form/contact-form.component';
import {ContactFormSuccessComponent} from './pages/contact-form/contact-form-success/contact-form-success.component';

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: 'become-petsitter', component: BecomePetsitterComponent},
  {path: 'petsitters/:id', component: PetsitterComponent},
  {path: 'petsitters', component: PettsittersComponent},
  {path: 'register-form/basic-info', component: BasicInfoComponent},
  {path: 'register-form/address', component: AddressComponent},
  {path: 'register-form/services', component: ServicesComponent},
  {path: 'register-form/personal-info', component: PersonalInfoComponent},
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'contact-form/success', component: ContactFormSuccessComponent},
  {path: 'register-form/login', component: LoginFormComponent},
  {path: 'login', component: LoginFormComponent},

  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  /*   ** is last route, add new only above ^^^  */
  {path: '**', component: MainPageComponent} // We can add 404 page here later
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
