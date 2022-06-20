import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { MoreInfoComponent } from './more-info/more-info.component';

import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'welcome', component:WelcomeComponent},
  {path:"films",component:FilmsComponent},
  {path:"starships",component:StarshipsComponent},
  {path:"vehicles",component:VehiclesComponent},
  {path:"moreinfo",component:MoreInfoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
