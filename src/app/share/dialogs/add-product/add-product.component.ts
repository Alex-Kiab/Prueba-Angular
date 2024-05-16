import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LogInService } from '../../log-in.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'precio',
    'peso',
    'formato',
    'marca',
    'desripcion',
  ];

  formats: string[] = ['kg', 'g', 'mg'];

  dialogForm: FormGroup;

  constructor(
    private addProductForm: FormBuilder,
    private logInService: LogInService
  ) {
    this.dialogForm = this.addProductForm.group({
      id: [null, Validators.required],
      nombre: ['', Validators.required],
      precio: [null, Validators.required],
      peso: [null, Validators.required],
      formato: ['', Validators.required],
      marca: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  submitProduct() {
    this.logInService.addProductService(this.dialogForm.value);
  }
}
