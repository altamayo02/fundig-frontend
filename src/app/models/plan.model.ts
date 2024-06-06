export class Plan {
  id?: string
  name?: string
  description?: string
  status?: string
  cost?: number
  type?: string
  beneficiaryAmount?: number

  constructor(
    id?: string,
    name?: string,
    description?: string,
    status?: string,
    cost?: number,
    type?: string,
    beneficiaryAmount?: number
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.status = status
    this.cost = cost
    this.type = type
    this.beneficiaryAmount = beneficiaryAmount
  }
}
