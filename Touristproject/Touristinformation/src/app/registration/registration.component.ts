import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { TouristserviceService } from '../service/touristservice.service';
import { Registration } from './registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  touristForm:Registration=new Registration()
    

  constructor(private tourservice:TouristserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(tourForm:any){
  
  const data = JSON.stringify(tourForm.value);
  this.tourservice.sendData(data).subscribe(data=>{
   alert("data inserted successfully")
   this.gototourView()
  }
 
  )

 
}

gototourView(){
  this.router.navigateByUrl("/view")
}

}
