import { Component } from '@angular/core';
import { CardSmComponent } from "./components/card-sm/card-sm.component";
import { CardMdComponent } from "../dashboard/components/card-md/card-md.component";
import { GenericBtnComponent } from "../../ui/generic-btn/generic-btn.component";
import { InputWithClearComponent } from "../../ui/input-with-clear/input-with-clear.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardSmComponent, CardMdComponent, GenericBtnComponent, InputWithClearComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
