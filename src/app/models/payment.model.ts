export class Payment {
  id: number
  amount: number
  currency: string
  status: string
  method: string
  // TODO - Date
  paidAt: string
  ePaycoMeta: string
}
