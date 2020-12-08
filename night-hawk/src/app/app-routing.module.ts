import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
// import { DashComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path:  'about', component:  AboutComponent},
  // { path:  'home', component:  DashboardComponent},
  { path: '', redirectTo: '/dash', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
