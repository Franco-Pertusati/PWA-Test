import { Component } from '@angular/core';
import { GenericBtnComponent } from "../../../ui/generic-btn/generic-btn.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [GenericBtnComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
