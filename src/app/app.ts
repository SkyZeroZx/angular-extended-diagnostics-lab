import { Component } from '@angular/core';

import { CartPreview } from './cart-preview';
import { RelatedProducts } from './related-products';
import { StorageMeter } from './storage-meter';

@Component({
  selector: 'app-root',
  imports: [CartPreview, RelatedProducts, StorageMeter],
  template: `
    <h1>Extended diagnostics lab</h1>

    <app-cart-preview />
    <app-related-products />
    <app-storage-meter />
  `,
})
export class App {}
