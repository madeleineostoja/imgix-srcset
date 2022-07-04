# Imgix SrSet Generator

[![NPM](https://img.shields.io/npm/v/imgix-srcset)](https://www.npmjs.com/package/imgix-srcset) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/imgix-srcset?label=size) [![License](https://img.shields.io/npm/l/imgix-srcset)](https://github.com/madeleineostoja/imgix-srcset/blob/master/LICENSE.md)

A dead simple utility to generate responsive srcsets from an Imgix compatible source URL

# Usage

Install via npm (or yarn etc)

```sh
npm i imgix-srcset
```

Import into your project and generate a srcset for any image you need, from an Imgix compatbile URL

#### Plain JS

```js
import { srcset } from 'imgix-srcset';

const img = document.createElement('img');
img.src = '...';
img.srcset = srcset('...');
```

#### React

```jsx
import { srcset } from 'imgix-srcset';

function ReactLazyImgix({ src }) {
  return <img src={src} srcset={srcset(src)} loading="lazy" />;
}
```

### Imgix Options

By default existing parameters are stripped from the src Imgix image, you can specify any Imgix propreties you want in the `srcset` function

```js
srcset('...', {
  fit: 'crop',
  ar: '16:9'
});
```
