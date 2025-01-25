import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'light';

  constructor() {}

  // Cambiar entre tema claro y oscuro
  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(this.currentTheme);
    console.log(this.currentTheme);
  }

  // Aplicar el tema
  setTheme(theme: string): void {
    const body = document.body;
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  // Establecer el tema al iniciar la app
  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      console.log('savedTheme: ' + savedTheme);
      this.setTheme(this.currentTheme);
    }
    console.log(this.currentTheme);
  }
}
