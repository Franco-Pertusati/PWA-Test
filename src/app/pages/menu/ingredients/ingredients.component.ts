import { Component } from '@angular/core';
import { GenericBtnComponent } from '../../../ui/generic-btn/generic-btn.component';
import { NewProductDialogComponent } from '../products/dialogs/new-product-dialog/new-product-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { InputWithClearComponent } from "../../../ui/input-with-clear/input-with-clear.component";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css',
})
export class IngredientsComponent {}
