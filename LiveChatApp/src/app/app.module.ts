

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { MatMenuModule } from '@angular/material/menu';
import { LandingComponent } from './components/landing/landing.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ProfileComponent } from './components/profile/profile.component';

;


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(()=>getStorage()),
    HotToastModule.forRoot(),
    MatMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
