import { ServiceExecution } from "./service-execution.model"
import { User } from "./user.model"

export class Review {
  id: number
  rating: number
  comment: string
  user: User
  execution: ServiceExecution
}
