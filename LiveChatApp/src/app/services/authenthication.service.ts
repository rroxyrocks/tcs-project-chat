import { Injectable } from '@angular/core';

import {
  Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, user, UserCredential} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenthicationService {
  currentUser$= authState(this.auth);// returns authentication of a user

  constructor(private auth: Auth) { }

  login(username: string, password: string): Observable<any>  {
    return from (signInWithEmailAndPassword(this.auth, username, password));

  }
  signUp(name: string, email: string, password: string)
  {
    return from(createUserWithEmailAndPassword(this.auth,email,password)
    ).pipe(switchMap(({user})=> updateProfile(user,{displayName: name}))
    )
  }

  logout(): Observable<any>{
    return from(this.auth.signOut());
  }

}

