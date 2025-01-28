import { Component, inject } from '@angular/core';
import { InputWithClearComponent } from '../../../../../ui/input-with-clear/input-with-clear.component';
import { GenericBtnComponent } from '../../../../../ui/generic-btn/generic-btn.component';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product-dialog',
  standalone: true,
  imports: [InputWithClearComponent, GenericBtnComponent, ReactiveFormsModule],
  templateUrl: './new-product-dialog.component.html',
  styleUrl: './new-product-dialog.component.css',
})
export class NewProductDialogComponent {
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      code: [''],
      category: [''],
      subCategory: ['']
    });
  }

  createProduct(): void {
    console.log(this.productForm.value); // Esto imprime el objeto del producto en consola
  }
}
