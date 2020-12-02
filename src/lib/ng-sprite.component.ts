import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-sprite',
  template: `
    <div class="sprite" *ngIf="image && h && w && p"
        [style.width]="w"
        [style.height]="h"
        [style.background-position]="p"
        [style.background-image]="'url(' + image + ')'">
    </div>
  `,
  styles: [`
    .sprite {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
  `]
})
export class NgSpriteComponent implements OnInit {
  @Input() image: string;
  @Input() height: string;
  @Input() width: string;
  @Input() x: string;
  @Input() y: string;
  w: string;
  h: string;
  p: string;

  ngOnInit(): void {
    this.w = `${this.width}px`;
    this.h = `${this.height}px`;
    this.p = `${this.x}px ${this.y}px`;
  }
}
