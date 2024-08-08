# BBcode converter angular 2+ pipe

Convert plain bb code to html code with pipe based on [Js body parser](https://github.com/DasRed/js-bbcode-parser). 

## Installation

1. Use npm to install the package

  ```terminal
  npm i bbcode-converter-pipe --save 
  ```
or

```terminal
  yarn add bbcode-converter-pipe 
```
2. You need also add into your module `declarations` the `BbcodeConverterPipe` in order to add all of the pipes.

  ```typescript
  import {BbcodeConverterPipe} from 'bbcode-converter-pipe';

  
  @NgModule({
   // ...
   declarations: [
     // ...
     BbcodeConverterPipe
   ]
  })
  ```

## Usage

```typescript
export class AppComponent {
  text = 'I would like to [b]emphasize[/b] this';
}
```

```html
<span [innerHTML]="text | bbcode"></span> 
<!-- Output: <span>I would like to <strong>emphasize</strong> this</span> -->
```

## Contributing

* Before adding any new feature or a fix make sure to open an issue first!

Make sure you have `angular-cli` & `karma` installed globally.

```bash
npm install -g angular-cli karma
```

Clone the project, and install dependencies.

```bash
git clone https://github.com/call-me-adas/angular-converter-bbcode-pipe.git
npm install
```

Create a new branch

```bash
git checkout -b feat/someFeature
```

Add tests & make sure everything is running properly
```bash
npm test
```

Commit & push, and make a pull request!

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
