import { Component } from '@angular/core';
import { GenericBtnComponent } from "../../ui/generic-btn/generic-btn.component";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [GenericBtnComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

}
