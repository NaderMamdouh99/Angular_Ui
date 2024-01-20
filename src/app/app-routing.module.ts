import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'card',component:CardComponent},
  {path:'chart',component:ChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
