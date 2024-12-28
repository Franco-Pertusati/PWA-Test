import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-square-btn',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './square-btn.component.html',
  styleUrl: './square-btn.component.css'
})
export class SquareBtnComponent {
  @Input() icon: string | null = null;
  @Input() destination: string | null = null;
  @Input() notifications: number = 0;
  @Input() background: boolean = false;
  @Input() active: boolean = false;
}
