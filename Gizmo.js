import './lib/matter.js';
import Entity from "./Entity.js";
import { keyMap } from "./lib/keyMap.js";
import collisions from './collisions.js';


class Gizmo extends Entity {
    constructor() {
        super()

        this.body = Matter.Bodies.rectangle(40, 60, 90, 20, {
                collisionFilter: {
                    category: collisions.character, // The collision category this entity belongs to
                    mask: collisions.ground // The collision categories this entity collides with
                },
                render: {
                    fillStyle: '#063970',
                },
                label: this.key

            })
        
    
    }
    tick() {
        console.log('Hieeeeeeee')

        console.log(keyMap)

        if (keyMap['ArrowRight'] === true) {

            Matter.Body.applyForce(this.body, this.body.position, { x: 0.01, y: 0})
            console.log('help')
        }
        if (keyMap ['ArrowLeft'] === true) {

            Matter.Body.applyForce(this.body, this.body.position, { x: -0.01, y: 0})
        }
        if (keyMap ['ArrowUp'] === true) {

            Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: -0.02})
        }
                
        }
    }

export default Gizmo 