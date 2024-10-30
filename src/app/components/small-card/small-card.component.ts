import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input() id: String = '';
  @Input() photoCover: String = '';
  @Input() dateCard: String = '';
  @Input() cardTitle: String = '';
}
