import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<p>Hello, World!</p>`,
})
export class AppComponent {
  title = 'ng-learn';
}