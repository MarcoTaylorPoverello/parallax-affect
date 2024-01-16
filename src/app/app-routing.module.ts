import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { AboutComponent} from "./about/about.component";
import { PortfolioComponent} from "./portfolio/portfolio.component";
import { ServicesComponent} from "./services/services.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '', component: AboutComponent},
  { path: '', component: PortfolioComponent},
  { path: '', component: ServicesComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }
