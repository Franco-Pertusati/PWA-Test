import { Component } from '@angular/core';
import { GenericBtnComponent } from '../../../ui/generic-btn/generic-btn.component';
import { NewProductDialogComponent } from './dialogs/new-product-dialog/new-product-dialog.component';
import { NewCategoryDialogComponent } from './dialogs/new-category-dialog/new-category-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [GenericBtnComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(private dialog: MatDialog) {}

  openProdDialog(): void {
    this.dialog.open(NewProductDialogComponent);
  }

  openCatDialog(): void {
    this.dialog.open(NewCategoryDialogComponent, {});
  }
}
