import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'task';
  remove=''
  nam='null';
  x: any;
  time: any;
  y: any;
  z: any;
  more:any;
  arr2:any;


  arr=[]
  key=null;
  i:any;
  index=-1
  size:any
  del(a:any){
    console.log('delet fun')
  this.key=a;
  this.fullFun()

  
  }
  moreFun(a:any){
 this.ser.MoreFun(a);


  }
  fullFun(){
          if(this.key!=null){
            this.size=this.arr2.length;
           for(let i = 0; i < this.size; i++)
        
           {
              if(this.arr2[i].name == this.key)
              {               
                    this.arr2.splice(this.arr2.index,1)
                  }              
              }
          }
          else
          {
            console.log("else part")
          }  
        }
  constructor(private ser: ServicesService) {


  }
  obj$: Observable<string> = of('hello everyone');
  ngOnInit() {
    this.ser.serFun().subscribe(data => {
      this.x = data;

      this.y = this.x.results;
    
   this.arr=this.y;
   this.arr2=this.arr;
   this.fullFun();
    })
   
  }
}
