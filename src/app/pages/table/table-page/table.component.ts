import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ProductInterface } from '../../../core/interfaces';
import { PRODUCTO } from '../../../core/data';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { LogInService } from '../../../share/log-in.service';
import { Subscription } from 'rxjs';
import { WarningComponent } from '../dialogs/warning/warning.component';
import { EditProductComponent } from '../dialogs/edit-product/edit-product.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'nombre',
    'precio',
    'formato',
    'marca',
    'accion',
  ];
  dataSource = new MatTableDataSource<ProductInterface>(PRODUCTO);
  private subscription!: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private logInService: LogInService, public dialog: MatDialog) {}

  ngOnInit() {
    this.subscription = this.logInService.products$.subscribe(
      (allProducts) => (this.dataSource.data = allProducts)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialogWarning(id: number, nombre: string): void {
    this.dialog
      .open(WarningComponent, { data: nombre })
      .afterClosed()
      .subscribe((value) => {
        if (value === true) {
          this.logInService.removeDataTableService(id);
        }
      });
  }

  openDialogEditProduct(row: ProductInterface) {
    this.dialog.open(EditProductComponent, {
      data: {
        id: row.id,
        nombre: row.nombre,
        precio: row.precio,
        peso: row.peso,
        formato: row.formato,
        marca: row.marca,
        descripcion: row.descripcion,
      },
    });
  }
}
