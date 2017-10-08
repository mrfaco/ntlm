import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListaPostsComponent } from '../components/listaPosts/listaPosts.component';

const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListaPostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

