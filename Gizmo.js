import './lib/matter.js';
import Entity from "./Entity.js";
import { keyMap } from "./lib/keyMap.js";
import collisions from './collisions.js';
import getByGroup from './lib/getByGroup.js';

class Gizmo extends Entity {
    constructor() {
        super()

        this.body = Matter.Bodies.rectangle(40, 49, 40, 40, {
                collisionFilter: {
                    category: collisions.character, // The collision category this entity belongs to
                    mask: collisions.ground // The collision categories this entity collides with
                },
                render: {
                    fillStyle: '#1239F3',
                },
                label: this.key

            })
        
    
    }
    tick() {


        if (keyMap['ArrowRight'] === true) {

            Matter.Body.applyForce(this.body, this.body.position, { x: 0.01, y: 0})
        }
        if (keyMap ['ArrowLeft'] === true) {

            Matter.Body.applyForce(this.body, this.body.position, { x: -0.01, y: 0})
        }
        
        if (Matter.Query.collides(this.body, getByGroup('platform').bodies).length > 0) {
            if (keyMap ['ArrowUp'] === true) {
                console.log('pressed');
                Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: -0.05})
            }            
        }
    }
}
export default Gizmo 