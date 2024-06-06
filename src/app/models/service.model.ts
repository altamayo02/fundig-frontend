export class Service {
  id?: number
  name: string
  description?: string
  cost: number

  constructor(id?: number, name?: string, description?: string, cost?: number) {
    this.id = id
    this.name = name
    this.description = description
    this.cost = cost
  }
}
