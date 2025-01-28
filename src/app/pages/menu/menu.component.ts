import { Component } from '@angular/core';
import { NavbarComponent } from '../../ui/navbar/navbar.component';
import { GenericBtn } from '../../models/button';
import { RouterOutlet } from '@angular/router';
import { GenericBtnComponent } from "../../ui/generic-btn/generic-btn.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, GenericBtnComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  navBar: GenericBtn[] = [
    {
      icon: 'sell',
      label: 'Products',
      active: false,
      accent: false,
      destination: 'products',
    },
    {
      icon: 'egg',
      label: 'Ingredients',
      active: false,
      accent: false,
      destination: 'ingredients',
    },
    {
      icon: 'savings',
      label: 'Promos',
      active: false,
      accent: false,
      destination: 'promos',
    },
  ];
}
