import { Component } from '@angular/core';
import { SquareBtnComponent } from "../../ui/square-btn/square-btn.component";

@Component({
  selector: 'app-point-of-sale',
  standalone: true,
  imports: [SquareBtnComponent],
  templateUrl: './point-of-sale.component.html',
  styleUrl: './point-of-sale.component.css'
})
export class PointOfSaleComponent {

}
