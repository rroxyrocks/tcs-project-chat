import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenthicationService } from './services/authenthication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthenthicationService,private router : Router){


  }
logout(){
  this.authService.logout().subscribe(()=>{
  this.router.navigate(['']);
  });
}

}

