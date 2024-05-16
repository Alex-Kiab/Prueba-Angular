import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInService } from '../../../share/log-in.service';
import { MatDialog } from '@angular/material/dialog';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let router: Router;
  let logInService: LogInService;
  let dialogService: MatDialog;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, RouterModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    logInService = TestBed.get(LogInService);
    dialogService = TestBed.get(MatDialog);
  });

  it('No se ha realizado navegación por falta de login', () => {
    spyOn(component, 'openDialogError');
    component.submitButton();
    expect(component.openDialogError).toHaveBeenCalled();
    expect(logInService.require).toBeTrue();
  });

  it('Se ha realizado navegación a tabla', () => {
    spyOn(router, 'navigate');
    component.loginForm.setValue({
      usuario: 'root1',
      contrasena: 'root1',
    });
    component.submitButton();
    expect(router.navigate).toHaveBeenCalledWith(['tabla']);
  });

  it('No se ha realizado navegación por login incorrecto', () => {
    spyOn(component, 'openDialogError');
    component.loginForm.setValue({
      usuario: 'none',
      contrasena: 'none',
    });
    component.submitButton();
    expect(component.openDialogError).toHaveBeenCalled();
    expect(logInService.require).toBeFalse();
  });

  it('Abre el dialogo de error', () => {
    spyOn(component, 'openDialogError').and.callThrough();
    spyOn(dialogService, 'open');
    component.submitButton();
    expect(component.openDialogError).toHaveBeenCalled();
    expect(dialogService.open).toHaveBeenCalled();
  });

  it('Se ha realizado navegación a dashboard', () => {
    spyOn(router, 'navigate');
    component.exit();
    expect(router.navigate).toHaveBeenCalledWith(['']);
  });
});
