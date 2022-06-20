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
  myfun(l:any){
    console.log(l)
  }
  filmFetch(l: any) {
   
   this.ser.filmsFun(l)
  }
  vehicleFetch(l: any) {
  
console.log(l);
      this.ser.vehiclesFun(l);
    

  }


starshipFetch(l:any){

  this.ser.starshipFun(l);

}

}
