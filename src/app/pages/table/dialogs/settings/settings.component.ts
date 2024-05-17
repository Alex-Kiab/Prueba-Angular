import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { LogInService } from '../../../../share/log-in.service';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private subscription!: Subscription;

  displayedColumns: string[] = [
    'nombre',
    'precio',
    'formato',
    'marca',
    'accion',
  ];

  constructor(public logInService: LogInService) {}

  ngOnInit(): void {
    this.subscription = this.logInService.columns$.subscribe(
      (columnOrderService) =>
        (this.displayedColumns = columnOrderService.map(
          (column) => column.columnName
        ))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  saveOrder() {
    this.logInService.columnOrder(
      this.displayedColumns.map((columnName) => ({ columnName }))
    );
  }
}
