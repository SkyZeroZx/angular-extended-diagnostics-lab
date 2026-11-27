import { Component } from '@angular/core';
import { HeavyCard } from '../shared/heavy-card';

@Component({
  selector: 'app-cart-preview',
  imports: [HeavyCard],
  template: `
    <button #cartButton type="button">Cart (3)</button>

    @defer (prefetch on hover(cartButton)) {
      <app-heavy-card label="Cart preview" />
    }
  `,
})
export class CartPreview {}
