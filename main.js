import './lib/matter.js';
import { keyMapper } from './lib/keyMap.js';
import { tickCounter } from './lib/tickCounter.js';
import { global } from './lib/global.js';
import Character from './Character.js';
import Platform from './Platform.js';
import Gizmo from './Gizmo.js';
function main() {

    const { Engine, Render, Runner, Composite, World } = Matter;

    // Create a running engine
    const engine = Engine.create({
        gravity: {
            x: 0,
            y: 1
        }
    });

    // Create a renderer
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 500,
            wireframes: false
        }
    });

    // Add the engine, and an empty list of 'bodies' to the world
    World.add(engine.world, []);

    // Start the renderer
    Render.run(render);
    const runner = Runner.create();

    // Ensure that the physics runs at a constant speed regardless of framerate
    runner.isFixed = false;

    Runner.run(runner, engine); 

    // Define global variables:
    global.bodies = []; // List of physics 'bodies' in the world
    global.entities = []; // List of entities in the world
    global.world = engine.world;
    global.engine = engine;
    global.render = render;
    global.runner = runner;


    // Set function to run every game tick
    Matter.Events.on(runner, 'tick', tickCounter);

    // Check for keypresses and store them
    window.addEventListener('keydown', e => keyMapper(e))
    window.addEventListener('keyup', e => keyMapper(e))

    // Add entities here
    const player = new Character(50, 50, 50, 50);
   
    const ground = new Platform(50, 300, 200, 15);
    ground.add();

    const Platform1 = new Platform(250, 250, 150, 15);
    Platform1.body.render.fillStyle = '#0EF906'
    Platform1.add();

    const Platform2 = new Platform(600, 300, 200, 20);
    Platform2.body.render.fillStyle = '#8E44AD';
    Platform2.add();

    const Platform3 = new Platform(100, 900, 4000, 50);
    Platform3.add();

    const Platform5 = new Platform(400, 175, 150, 16);
    Platform5.body.render.fillStyle = '#FFFF04';
    Platform5.add();

    const Platform4 = new Platform(300, 450, 5000, 50);
    Platform4.body.render.fillStyle = '#E712F3';
    Platform4.add();






    







    const myplayer = new Gizmo()
    myplayer.add();

}
window.onload = main;


function stop() {

    const { Engine, Render, Runner, Composite, World } = Matter;

    World.clear(global.world);
    Engine.clear(global.engine);
    Render.stop(global.render);
    Runner.stop(global.runner);
    global.render.canvas.remove();
    global.render.canvas = null;
    global.render.context = null;
    global.render.textures = {};

}

export { stop, main };