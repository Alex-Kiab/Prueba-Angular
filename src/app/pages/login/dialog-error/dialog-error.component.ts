import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { LogInService } from '../../../share/log-in.service';

@Component({
  selector: 'app-dialog-error',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './dialog-error.component.html',
  styleUrl: './dialog-error.component.scss',
})
export class DialogErrorComponent {
  constructor(public logInPanelService: LogInService) {}
}
