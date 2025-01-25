import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generic-btn',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './generic-btn.component.html',
  styleUrl: './generic-btn.component.css',
})
export class GenericBtnComponent {
  @Input() icon: string | null = null;
  @Input() showTxt: boolean = true;
  @Input() destination: string | undefined = undefined;
  @Input() notifications: number = 0;
  @Input() enfasis: boolean = false;
  @Input() rounded: boolean = true;
  @Input() wfull: boolean = false;
  @Input() active: boolean = false;
  @Input() accent: boolean = false;
  @Input() outline: boolean = false;
}
