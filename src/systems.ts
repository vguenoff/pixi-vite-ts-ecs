import { Entity } from './entity'
import { Position, Velocity } from './components'

export class Movement {
  update(entities: Entity[], delta: number) {
    entities.forEach(entity => {
      const positionComponent = entity.getComponent(Position)
      const velocityComponent = entity.getComponent(Velocity)

      if (positionComponent && velocityComponent) {
        positionComponent.x += velocityComponent.dx * delta
        positionComponent.y += velocityComponent.dy * delta
      }
    })
  }
}
