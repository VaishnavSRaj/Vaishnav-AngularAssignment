import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ServerComponent } from './server/server.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { UserFormComponent } from './user-form/user-form.component';
import { Routes,RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
  AppComponent,
  ServerComponent,
  ServersComponent,
  UserFormComponent,
  SignupFormComponent,
  
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
