import Viewport  from './Viewport';
import GameObject from './GameObject';
import Scene from './Scene';
import SceneDirector from './SceneDirector';
import Audio from './Audio';
import Texture from './Texture';
import Behavior from './Behavior';
import Events from './Events';
import create from './create';

var Moirai = create;

Moirai.Viewport = Viewport;
Moirai.GameObject = GameObject;
Moirai.Scene = Scene;
Moirai.SceneDirector = SceneDirector;
Moirai.Audio = Audio;
Moirai.Events = Events;
Moirai.Texture = Texture;
Moirai.Behavior = Behavior;

export default Moirai;
