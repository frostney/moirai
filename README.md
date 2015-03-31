# moirai
[![Dependency Status](https://david-dm.org/freezedev/moirai.svg)](https://david-dm.org/freezedev/moirai)
[![devDependency Status](https://david-dm.org/freezedev/moirai/dev-status.svg)](https://david-dm.org/freezedev/moirai#info=devDependencies)

React.js game engine. Exciting, experimental and unstable.

`moirai` borrows a lot of ideas from [Lyria](http://github.com/freezedev/lyria).

## What does it look like?

Let's create a game:
```javascript
import {Game, Viewport, SceneDirector, Scene, GameObject} from 'moirai';

new Game(
  <Viewport>
    <SceneDirector>
      <Scene>
        <GameObject type="image" asset="hero.png" position="10, 10" />
      </Scene>
    </SceneDirector>
  </Viewport>
);
```

## Philosophy
- Thin layer on top of React.js
- DOM elements right now

## License
Public domain (UNLICENSE). If that does not work for you, you are allowed to license it under the terms of the MIT license.
