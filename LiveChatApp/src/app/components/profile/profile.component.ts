import { Component, OnInit } from '@angular/core';
import { AuthenthicationService } from 'src/app/services/authenthication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthenthicationService) { }

  ngOnInit(): void {
  }

}
