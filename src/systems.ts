import * as PIXI from 'pixi.js'

import type Entity from '@/entity'

export class NodeSystem {
  update(entity: Entity, delta: number) {
    const position = entity.getPosition()
    const velocity = entity.getVelocity()

    if (position && velocity) {
      position.x += velocity?.dx * delta
      position.y += velocity?.dy * delta
    }
  }

  render(entity: Entity, delta: number, renderCallback: () => void) {
    this.update(entity, delta)

    if (entity.getVisibility().visible) renderCallback()
  }
}
