import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from '../core/interfaces';
import { PRODUCTO } from '../core/data';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private userName = new BehaviorSubject<string | null>(null);
  userName$ = this.userName.asObservable();

  private products = new BehaviorSubject<ProductInterface[]>(PRODUCTO);
  products$ = this.products.asObservable();

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
}
