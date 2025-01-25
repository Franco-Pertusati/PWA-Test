import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-with-clear',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-with-clear.component.html',
  styleUrl: './input-with-clear.component.css',
})
export class InputWithClearComponent {
  @Input() icon: string = '';
  @Input() clearBtn: Boolean = false;
  @Input() placeholder: string = '';
  @Input() rounded: boolean = true;
}
