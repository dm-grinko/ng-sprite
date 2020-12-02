# NgSprite

[![npm](https://img.shields.io/npm/v/ng-sprite)](https://www.npmjs.com/package/ng-sprite)
![npm](https://img.shields.io/npm/dw/ng-sprite)
![NPM](https://img.shields.io/npm/l/ng-sprite)

## Install

```
npm i -S ng-sprite
```

## Usage

```typescript
import { NgSpriteModule } from 'ng-sprite';

@NgModule({
  imports: [
    NgSpriteModule
  ]
})
```

```html
<ng-sprite [image]="'assets/test.png'" [height]="250" [width]="500" [x]="0" [y]="-250"></ng-sprite>
```

## Why

This package is an angular component and serves as a wrapper around a CSS Sprite. CSS Sprites are a means of combining multiple images into a single image file for use on a website, to help with performance.
