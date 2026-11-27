import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-storage-meter',
  template: `
    <p>{{ usedGb() }} GB of {{ totalGb }} GB used</p>

    <div class="meter" [style.width]="200">
      <div class="meter__fill" [style.width.%]="usedPercent()"></div>
    </div>
  `,
  styles: `
    .meter {
      height: 8px;
      border-radius: 4px;
      background: #d9e2ec;
    }

    .meter__fill {
      height: 100%;
      border-radius: 4px;
      background: #2f6fde;
    }
  `,
})
export class StorageMeter {
  protected readonly totalGb = 15;
  protected readonly usedGb = signal(9.6);
  protected readonly usedPercent = computed(() => (this.usedGb() / this.totalGb) * 100);
}
