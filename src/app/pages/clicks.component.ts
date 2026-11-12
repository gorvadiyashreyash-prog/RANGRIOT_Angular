import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clicks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clicks.component.html'
})
export class ClicksComponent {}
