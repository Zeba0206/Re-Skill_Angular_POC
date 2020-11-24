import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TeamPageComponent} from './team-page/team-page.component';
import { MainComponent } from './main/main.component';




const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },

{path: '', component: MainComponent,
children:[
 { path: 'dashboard', component: DashboardComponent },
 { path: 'team-page', component: TeamPageComponent },
 { path: 'about-page', component: AboutPageComponent },
]
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  entryComponents: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
