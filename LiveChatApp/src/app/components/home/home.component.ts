import { Component, OnInit } from '@angular/core';
import { AuthenthicationService } from 'src/app/services/authenthication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  user$ = this.authService.currentUser$;

  constructor(public authService: AuthenthicationService){ { }





}  ngOnInit(): void {

  }
}
