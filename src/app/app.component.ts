import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericBtnComponent } from './ui/generic-btn/generic-btn.component';
import { InputWithIconComponent } from './ui/input-with-icon/input-with-icon.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { WideBtnComponent } from './ui/wide-btn/wide-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GenericBtnComponent,
    InputWithIconComponent,
    NavbarComponent,
    SidebarComponent,
    WideBtnComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'boilerPlate';
}
