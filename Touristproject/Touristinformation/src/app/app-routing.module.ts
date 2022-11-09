import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { TouristviewComponent } from './touristview/touristview.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"view",component:TouristviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
