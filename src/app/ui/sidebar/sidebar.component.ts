import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GenericBtnComponent } from '../generic-btn/generic-btn.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, GenericBtnComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  homeBtns = [
    {
      icon: 'grid_view',
      label: 'Dashboard',
      active: false,
    },
    {
      icon: 'point_of_sale',
      label: 'POS Magnament',
      active: false,
    },
    {
      icon: 'table_restaurant',
      label: 'Restaurant',
      active: false,
    },
    {
      icon: 'restaurant',
      label: 'Restaurant',
      active: false,
    },
    {
      icon: 'work',
      label: 'Shifts',
      active: false,
    }
  ];

  hotKeyBtns = [
    {
      icon: 'shopping_cart',
      label: 'Sell now',
      active: false,
    },
    {
      icon: 'swap_horiz',
      label: 'Move table',
      active: false,
    },
    {
      icon: 'swap_horiz',
      label: 'Move items',
      active: false,
    },
    {
      icon: 'close',
      label: 'Close all tables',
      active: false,
    },
  ];
}
