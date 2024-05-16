import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogInService } from '../log-in.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  loggedUserName: string | null = null;
  private subscription!: Subscription;

  constructor(private logInService: LogInService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.logInService.userName$.subscribe(
      (logInUsuarioService) => (this.loggedUserName = logInUsuarioService)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateTo() {
    this.router.navigate(['login']);
  }

  exit(): void {
    this.router.navigate(['']);
    this.logInService.logOut();
  }
}
