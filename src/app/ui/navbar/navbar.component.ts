import { Component, Input } from '@angular/core';
import { GenericBtn } from '../../models/button';
import { GenericBtnComponent } from '../generic-btn/generic-btn.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [GenericBtnComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() buttons: GenericBtn[] = [];
  lastBtn: GenericBtn | null = null;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.btnManagement();
  }

  btnManagement(): void {
    const url = this.router.url;
    const btn = this.buttons.find((b) => url.includes(b.destination));

    if (btn) {
      btn.active = true;
      if (this.lastBtn) {
        this.lastBtn.active = false;
      }
      this.lastBtn = btn;
    }
  }
}
