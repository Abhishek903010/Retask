import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';


import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
// export interface PeriodicElement {
//   name: string;
// 	height: string;
// 	mass: string;
// 	hair_color: string;
// 	skin_color: string;
// 	eye_color: string;
// 	birth_year: string;
// 	gender: string;
// }

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
 
//   displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol','demo-skin'];
  
//   @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
//   @ViewChild(MatSort, { static: true }) sort!: MatSort;
  
// y:any;
// userData:[]=[];

  // dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private ser:ServicesService) { }

  ngOnInit(): void {
    this.ser.fil$.subscribe((fi:any)=>{
      // this.y=fi;
      // console.warn(this.y);
      // let x:PeriodicElement[]=this.y;
      // this.dataSource.data =x;
      // this.dataSource.paginator = this.paginator;
      //   this.dataSource.sort = this.sort;
      console.log(fi)
      
    })
  }
//   applyFilter(event: Event) {
//     let filterValue = (event.target as HTMLInputElement).value;
//    this.dataSource.filter = filterValue.trim().toLowerCase();
//   }
// }

}
