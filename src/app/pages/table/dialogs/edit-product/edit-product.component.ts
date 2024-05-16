import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LogInService } from '../../../../share/log-in.service';
import { ProductInterface } from '../../../../core/interfaces';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent implements OnInit {
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
    private logInService: LogInService,
    @Inject(MAT_DIALOG_DATA) public productData: ProductInterface
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

  ngOnInit(): void {
    this.dialogForm.patchValue(this.productData);
  }

  submitProduct() {
    this.logInService.editProductService(
      this.dialogForm.value,
      this.dialogForm.value.id
    );
  }
}
