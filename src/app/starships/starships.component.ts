import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';


import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  model: string;
  manufacturer: string;
	cost_in_credits: string;
	name:string;
}
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'button'];
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  
y:any;
userData:[]=[];
show:any;
  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private ser:ServicesService) { }

  display(n:any){
this.show=n;
  }
  ngOnInit(): void {
    this.ser.starshi$.subscribe((fi:any)=>{
      this.y=fi;
      console.warn(this.y);
      let x:PeriodicElement[]=this.y;
      this.dataSource.data =x;
      this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      
      
    })
  }
  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



