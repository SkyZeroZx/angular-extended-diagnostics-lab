import { Component } from '@angular/core';
import { HeavyCard } from '../shared/heavy-card';

@Component({
  selector: 'app-related-products',
  imports: [HeavyCard],
  template: `
    <h3>Related products</h3>

    @defer (
      on viewport({ rootMargin: '200px', threshold: 0.25 });
      prefetch on viewport({ threshold: 0.25, rootMargin: '200px' })
    ) {
      <app-heavy-card label="Related products" />
    } @placeholder {
      <p>Loading related products…</p>
    }
  `,
})
export class RelatedProducts {}
