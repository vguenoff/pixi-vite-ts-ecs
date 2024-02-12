import * as PIXI from 'pixi.js'

import { Entity } from './entity'
import { Position, Velocity } from './components.ts'
import { Movement } from './systems'

const app = new PIXI.Application({ width: 800, height: 600 })
document.body.appendChild(app.view as unknown as Node)

const entities = [
  new Entity()
    .addComponent(new Position(400, 300))
    .addComponent(new Velocity(1, 1)),
  new Entity()
    .addComponent(new Position(400, 300))
    .addComponent(new Velocity(-0.5, 0.5)),
]

const movementSystem = new Movement()

app.ticker.add(delta => {
  console.log(delta)

  movementSystem.update(entities, delta)

  // Render entities
  entities.forEach(entity => {
    const positionComponent = entity.getComponent(Position)

    if (positionComponent) {
      // Create a PIXI.Graphics object for each entity
      const graphics = new PIXI.Graphics()
      graphics.beginFill(0xff0000)
      graphics.drawRect(positionComponent.x, positionComponent.y, 50, 50)
      graphics.endFill()

      // Add the graphics object to the stage
      app.stage.addChild(graphics)
    }
  })
})
