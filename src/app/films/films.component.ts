import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';


import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  director: string;
  producer: string;
	release_date: string;
	title:string;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
 
  displayedColumns: string[] = ['title', 'button'];
  
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
    this.ser.fil$.subscribe((fi:any)=>{
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


