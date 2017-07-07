import { Component, Input } from '@angular/core';
import { About } from '../models/about';

@Component({
  selector: 'bc-about-message',
  template: `
    <md-card>Server response: {{about | json}}</md-card>
  `
})
export class AboutMessageComponent {
  @Input() about: About;
}
