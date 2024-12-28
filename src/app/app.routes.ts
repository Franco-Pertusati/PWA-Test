import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PointOfSaleComponent } from './pages/point-of-sale/point-of-sale.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ShiftsComponent } from './pages/shifts/shifts.component';
import { StatsComponent } from './pages/stats/stats.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'point-of-sale', component: PointOfSaleComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'shifts', component: ShiftsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'dashboard' },
];
