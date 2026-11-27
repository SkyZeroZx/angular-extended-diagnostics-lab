import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-card',
  template: `
    <article>
      <p>{{ label() }}</p>
    </article>
  `,
})
export class HeavyCard {
  readonly label = input('Awesome heavy card');
}
