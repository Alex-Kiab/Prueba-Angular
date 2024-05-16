import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogInService } from '../log-in.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  loggedUserName: string | null = null;
  private subscription!: Subscription;

  constructor(
    public loginPanelService: LogInService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscription = this.loginPanelService.userName$.subscribe(
      (logInUsuarioService) => (this.loggedUserName = logInUsuarioService)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
