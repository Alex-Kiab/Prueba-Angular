import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColumnInterface, ProductInterface } from '../core/interfaces';
import { COLUMN, PRODUCTO } from '../core/data';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private userName = new BehaviorSubject<string | null>(null);
  userName$ = this.userName.asObservable();

  private products = new BehaviorSubject<ProductInterface[]>(PRODUCTO);
  products$ = this.products.asObservable();

  private columns = new BehaviorSubject<ColumnInterface[]>(COLUMN);
  columns$ = this.columns.asObservable();

  require: boolean = false;

  logInUserName(logInUsuario: string): void {
    this.userName.next(logInUsuario);
  }

  logOut(): void {
    this.userName.next(null);
  }

  addProductService(dialogFormValues: ProductInterface): void {
    this.products.next([...this.products.value, dialogFormValues]);
  }

  removeDataTableService(id: number) {
    this.products.next(
      [...this.products.value].filter((value, index, array) => {
        if (value.id === id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }

  editProductService(dialogFormValues: ProductInterface, id: number) {
    this.products.next(
      this.products.value.map((value) => {
        if (value.id === id) {
          return { ...value, ...dialogFormValues };
        } else {
          return value;
        }
      })
    );
  }

  columnOrder(order: ColumnInterface[]): void {
    this.columns.next(order);
  }
}
