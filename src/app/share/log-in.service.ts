import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private userName = new BehaviorSubject<string | null>(null);
  userName$ = this.userName.asObservable();

  constructor() {}

  logInUserName(logInUsuario: string) {
    this.userName.next(logInUsuario);
  }
}
