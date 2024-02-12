import * as PIXI from 'pixi.js'

import Entity from '@/entity'
import { Position, Velocity, Visibility } from '@/components.ts'
import { NodeSystem } from '@/systems'

const app = new PIXI.Application({ width: 800, height: 600 })
document.body.appendChild(app.view as unknown as Node)

const entities = [
  new Entity()
    .add(new Position(400, 300))
    .add(new Velocity(1, 1))
    .add(new Visibility(true)),
  new Entity()
    .add(new Position(400, 300))
    .add(new Velocity(-0.5, 0.5))
    .add(new Visibility(true)),
  new Entity()
    .add(new Position(400, 300))
    .add(new Velocity(0, 0.5))
    .add(new Visibility(true)),
]

const nodeSystem = new NodeSystem()

app.ticker.add(delta => {
  console.log(delta)

  // Clear stage
  app.stage.children.length = 0

  entities.forEach(entity => {
    nodeSystem.render(entity, delta, () => {
      const positionComponent = entity.getPosition()

      // Create a PIXI.Graphics object for each entity
      const graphics = new PIXI.Graphics()
      graphics.beginFill(0xff0000)
      graphics.drawRect(positionComponent.x, positionComponent?.y, 50, 50)
      graphics.endFill()

      // Add the graphics object to the stage
      app.stage.addChild(graphics)
    })
  })
})
