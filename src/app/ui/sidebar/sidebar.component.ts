import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GenericBtnComponent } from '../generic-btn/generic-btn.component';
import { NavigationEnd, Router } from '@angular/router';
import { GenericBtn } from '../../models/button';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, GenericBtnComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  homeBtns: GenericBtn[] = [
    {
      icon: 'grid_view',
      label: 'Dashboard',
      active: false,
      accent: false,
      destination: 'dashboard',
    },
    {
      icon: 'notifications',
      label: 'Notifications',
      active: false,
      accent: false,
      destination: 'notifications',
    },
    {
      icon: 'point_of_sale',
      label: 'Point of sale',
      active: false,
      accent: false,
      destination: 'point-of-sale',
    },
    {
      icon: 'table_restaurant',
      label: 'Restaurant',
      active: false,
      accent: false,
      destination: 'restaurant',
    },
    {
      icon: 'restaurant',
      label: 'Menu',
      active: false,
      accent: false,
      destination: 'menu',
    },
    {
      icon: 'work',
      label: 'Shifts',
      active: false,
      accent: false,
      destination: 'shifts',
    },
    {
      icon: 'equalizer',
      label: 'Stats',
      active: false,
      accent: false,
      destination: 'stats',
    },
    {
      icon: 'settings',
      label: 'Settings',
      active: false,
      accent: false,
      destination: 'settings',
    },
  ];

  isOpen = true;
  lastBtn: GenericBtn | null = null;

  constructor(public router: Router, private themeService: ThemeService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.btnManagement();
    }, 50);
    this.themeService.loadTheme()
  }

  btnManagement(): void {
    const url = this.router.url;
    const btn = this.homeBtns.find((b) => url.includes(b.destination));

    if (btn) {
      btn.active = true;
      if (this.lastBtn) {
        this.lastBtn.active = false;
      }
      this.lastBtn = btn;
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
