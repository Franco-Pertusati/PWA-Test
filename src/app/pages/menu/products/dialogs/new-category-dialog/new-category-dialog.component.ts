import { Component } from '@angular/core';
import { GenericBtnComponent } from "../../../../../ui/generic-btn/generic-btn.component";
import { InputWithClearComponent } from "../../../../../ui/input-with-clear/input-with-clear.component";

@Component({
  selector: 'app-new-category-dialog',
  standalone: true,
  imports: [GenericBtnComponent, InputWithClearComponent],
  templateUrl: './new-category-dialog.component.html',
  styleUrl: './new-category-dialog.component.css'
})
export class NewCategoryDialogComponent {

}
