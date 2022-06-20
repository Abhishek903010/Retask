import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import {  Subject ,forkJoin, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private http:HttpClient) { 
   
  }
  i=0
  myvar$:any;
  fil$:any
  vehicl$:any
  starshi$:any
  url='https://swapi.dev/api/people';
  serFun(){
    return this.http.get(this.url);
  }


  MoreFun(l:any){
this.myvar$=of(l);
  }


  filmsFun(film:any){
  this.fil$=forkJoin(film.map((filmUrl:any)=>{ return this.http.get(filmUrl)})

 ) 
 }



  vehiclesFun(vehicle:any){
    this.vehicl$= this.http.get(vehicle); 
    
  }
  starshipFun(starship:any){
    this.starshi$=this.http.get(starship);
  }
 
}


