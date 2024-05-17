export interface ProductInterface {
  id: number;
  nombre: string;
  precio: number;
  peso: number;
  formato: string;
  marca: string;
  descripcion: string;
}

export interface UserInterface {
  userName: string;
  userPassword: string;
}

export interface ColumnInterface {
  columnName: string;
}
