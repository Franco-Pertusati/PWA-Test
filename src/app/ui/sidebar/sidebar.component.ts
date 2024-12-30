import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GenericBtnComponent } from '../generic-btn/generic-btn.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
      icon: 'home',
      label: 'Dashboard',
      active: false,
      destination: 'dashboard',
    },
    {
      icon: 'notifications',
      label: 'Notifications',
      active: false,
      destination: 'point-of-sale',
    },
    {
      icon: 'table_restaurant',
      label: 'Restaurant',
      active: false,
      destination: 'restaurant',
    },
    {
      icon: 'restaurant',
      label: 'Menu',
      active: false,
      destination: 'menu',
    },
    {
      icon: 'work',
      label: 'Shifts',
      active: false,
      destination: 'shifts',
    },
    {
      icon: 'equalizer',
      label: 'Stats',
      active: false,
      destination: 'stats',
    },
    {
      icon: 'settings',
      label: 'Settings',
      active: false,
      destination: 'settings',
    },
  ];

  constructor(public router: Router) {}


  ngOnInit(): void {
    // Escucha eventos de navegación
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.btnManagement();
      });

    // Configura los botones al iniciar
    this.btnManagement();
  }

  btnManagement(): void {
    const url = this.router.url.split('/').pop();
    const btn = this.homeBtns.find(b => b.destination === url);

    if (btn) {
      btn.active = true;
      this.homeBtns.forEach(b => {
        if (b.destination !== url) {
          b.active = false;
        }
      });
    }
  }
}
