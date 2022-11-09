import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration/registration.model';
import { TouristserviceService } from '../service/touristservice.service';

@Component({
  selector: 'app-touristview',
  templateUrl: './touristview.component.html',
  styleUrls: ['./touristview.component.css']
})
export class TouristviewComponent implements OnInit {
 
  touristData:any=[];
  constructor(private touristservice:TouristserviceService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.touristservice.getTouristData().subscribe(data=>{
      console.log(data)
      this.touristData=data;
    
    })
  }
}
