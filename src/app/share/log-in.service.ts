import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private userName = new BehaviorSubject<string | null>(null);
  userName$ = this.userName.asObservable();

  require: boolean = false;

  logInUserName(logInUsuario: string) {
    this.userName.next(logInUsuario);
  }

  logOut() {
    this.userName.next(null);
  }
}
