import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {
more:any;
m:any;
  constructor(private ser: ServicesService) { }

  ngOnInit(): void {
    this.ser.myvar$.subscribe((s:any)=>{
      this.more=s;
      console.log(this.more.films);
    })
  
  }
  filmFetch(l: any) {
    this.m=l
   this.ser.filmsFun(l)
  }
  vehicleFetch(l: any) {
  
console.log(l);
      // this.ser.vehiclesFun(l);
    

  }


starshipFetch(l:any){

  this.ser.starshipFun(l);

}

}
