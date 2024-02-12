import { Position, Velocity, Visibility } from '@/components'

export default class Entity {
  components: any[]

  constructor() {
    this.components = []
  }

  add(component: any) {
    this.components.push(component)

    return this
  }

  getPosition(): Position {
    return this.components.find(component => component instanceof Position)
  }

  getVelocity(): Velocity {
    return this.components.find(component => component instanceof Velocity)
  }

  getVisibility(): Visibility {
    return this.components.find(component => component instanceof Visibility)
  }
}
