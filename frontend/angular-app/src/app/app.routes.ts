import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'todo', component: TodoComponent },
  // { path: 'message', component: MessageComponent },
  // { path: 'account', component: AccountComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
