import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../registration/registration.model';

@Injectable({
  providedIn: 'root'
})
export class TouristserviceService {
   headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  private url="http://localhost:9090/tourist/add"
  private geturl="http://localhost:9090/tourist/"
  
  constructor(private http:HttpClient) { }

  sendData(Value:any){
    
   
    return this.http.post(this.url,Value,{'headers':this.headers})
  }
  getTouristData(){
     return this.http.get(this.geturl)
  }
}
