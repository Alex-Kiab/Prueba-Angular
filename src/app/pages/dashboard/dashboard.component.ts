import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductInterface } from '../../core/interfaces';
import { PRODUCTO } from '../../core/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  productList: ProductInterface[] = PRODUCTO;

  constructor(private router: Router) {}

  navigateTo() {
    this.router.navigate(['login']);
  }
}
