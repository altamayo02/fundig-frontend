import { ServiceExecution } from "./service-execution.model"
import { User } from "./user.model"

export class Message {
  id: number
  user: User
  content: string
  chat: ServiceExecution
}
