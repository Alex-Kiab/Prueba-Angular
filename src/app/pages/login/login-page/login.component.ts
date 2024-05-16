import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { UserInterface } from '../../../core/interfaces';
import { USER } from '../../../core/data';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { LogInService } from '../../../share/log-in.service';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hide = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private logInService: LogInService
  ) {}

  userList: UserInterface[] = USER;

  loginForm = this.formBuilder.group({
    usuario: ['', Validators.required],
    contrasena: ['', Validators.required],
  });

  openDialogError(): void {
    this.dialog.open(DialogErrorComponent);
  }

  submitButton(): void {
    const formsName = this.loginForm.controls.usuario.value;
    const formsPassword = this.loginForm.controls.contrasena.value;
    const correctData: boolean = this.userList.some(
      (data) =>
        formsName === data.userName && formsPassword === data.userPassword
    );
    console.log(this.loginForm.value);

    if (this.loginForm.invalid) {
      this.openDialogError();
      this.logInService.require = true;
    } else if (correctData === true) {
      this.logInService.logInUserName(this.loginForm.value.usuario as string);
      this.router.navigate(['tabla']);
    } else {
      this.openDialogError();
      this.logInService.require = false;
    }
  }

  exit(): void {
    this.router.navigate(['']);
  }
}
