export class Entity {
  components: any[]

  constructor() {
    this.components = []
  }

  addComponent(component: any) {
    this.components.push(component)

    return this
  }

  getComponent(componentType: any) {
    return this.components.find(component => component instanceof componentType)
  }
}
